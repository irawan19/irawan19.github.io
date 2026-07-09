/**
 * Unit tests for the portfolio pagination + filter logic in assets/js/main.js.
 *
 * main.js is a single IIFE that wires up the whole page and depends on several
 * third-party globals (PureCounter, GLightbox, AOS, Audio, ...). We stub those
 * and build just enough DOM for the self-contained "Portfolio pagination
 * (4 per page) and filter" block, then drive it via DOM clicks.
 */
const { loadScript } = require('./helpers/loadScript');
const { trackListeners, cleanupListeners } = require('./helpers/domListeners');

const PER_PAGE = 4;

function stubThirdPartyGlobals() {
  global.PureCounter = jest.fn();
  global.GLightbox = jest.fn();
  global.AOS = { init: jest.fn() };
  global.Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn(() => Promise.resolve()),
    volume: 0,
  }));
}

/**
 * Build a portfolio list. `spec` is an array of filter class names
 * (e.g. 'filter-web') — one entry per portfolio item.
 */
function buildPortfolioDom(spec) {
  const items = spec
    .map(function (cls, i) {
      return (
        '<div class="portfolio-item ' + cls + '" data-id="proj-' + i + '">' +
        '<div class="portfolio-links"><a title="More Details" href="#">More</a></div>' +
        '</div>'
      );
    })
    .join('');

  document.body.innerHTML =
    '<i class="header-toggle"></i>' +
    '<header id="header"></header>' +
    '<a class="scroll-top" href="#"></a>' +
    '<ul class="portfolio-filters" id="portfolio-filters">' +
    '  <li data-filter="*" class="filter-active">All</li>' +
    '  <li data-filter=".filter-web">Web</li>' +
    '  <li data-filter=".filter-cloud">Cloud</li>' +
    '  <li data-filter=".filter-mobile">Mobile</li>' +
    '</ul>' +
    '<div id="portfolio-list">' + items + '</div>' +
    '<div id="portfolio-pagination"></div>';
}

function visibleItems() {
  return Array.from(document.querySelectorAll('#portfolio-list .portfolio-item')).filter(
    (el) => el.style.display !== 'none'
  );
}

function click(el) {
  el.dispatchEvent(new window.Event('click', { bubbles: true, cancelable: true }));
}

function clickPage(pageValue) {
  click(document.querySelector('#portfolio-pagination a[data-page="' + pageValue + '"]'));
}

// 10 items: 6 web, 3 cloud, 1 mobile.
const TEN_ITEMS = [
  'filter-web', 'filter-web', 'filter-web', 'filter-web', 'filter-web', 'filter-web',
  'filter-cloud', 'filter-cloud', 'filter-cloud',
  'filter-mobile',
];

beforeEach(() => {
  trackListeners();
  stubThirdPartyGlobals();
});

afterEach(() => {
  cleanupListeners();
  jest.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('initial render', () => {
  test('shows only the first page (4 items) of all projects', () => {
    buildPortfolioDom(TEN_ITEMS);
    loadScript('assets/js/main.js');

    expect(visibleItems().length).toBe(PER_PAGE);
    // First four items are visible, the rest hidden.
    const all = document.querySelectorAll('.portfolio-item');
    expect(all[0].style.display).toBe('');
    expect(all[4].style.display).toBe('none');
  });

  test('renders pagination with prev, one link per page, and next', () => {
    buildPortfolioDom(TEN_ITEMS);
    loadScript('assets/js/main.js');

    // 10 items / 4 per page => 3 pages.
    const numberedLinks = document.querySelectorAll('#portfolio-pagination a[data-page]:not([data-page="prev"]):not([data-page="next"])');
    expect(numberedLinks.length).toBe(3);
    expect(document.querySelector('#portfolio-pagination a[data-page="prev"]')).not.toBeNull();
    expect(document.querySelector('#portfolio-pagination a[data-page="next"]')).not.toBeNull();
    // Page 1 is active, prev is disabled.
    expect(document.querySelector('#portfolio-pagination .page-item.active a').getAttribute('data-page')).toBe('1');
    expect(document.querySelector('#portfolio-pagination a[data-page="prev"]').closest('.page-item').classList.contains('disabled')).toBe(true);
  });

  test('does not render pagination when everything fits on one page', () => {
    buildPortfolioDom(['filter-web', 'filter-web', 'filter-cloud']);
    loadScript('assets/js/main.js');

    expect(visibleItems().length).toBe(3);
    expect(document.querySelector('#portfolio-pagination').innerHTML).toBe('');
  });
});

describe('page navigation', () => {
  beforeEach(() => {
    buildPortfolioDom(TEN_ITEMS);
    loadScript('assets/js/main.js');
  });

  test('clicking page 2 shows the next slice of items', () => {
    clickPage('2');
    const all = document.querySelectorAll('.portfolio-item');
    expect(all[4].style.display).toBe('');
    expect(all[7].style.display).toBe('');
    expect(all[0].style.display).toBe('none');
    expect(visibleItems().length).toBe(PER_PAGE);
  });

  test('clicking the last page shows the remainder', () => {
    clickPage('3');
    // Page 3 of 10 items => items index 8, 9 only.
    expect(visibleItems().length).toBe(2);
    expect(document.querySelector('#portfolio-pagination a[data-page="next"]').closest('.page-item').classList.contains('disabled')).toBe(true);
  });

  test('next and prev controls move between pages', () => {
    click(document.querySelector('#portfolio-pagination a[data-page="next"]'));
    expect(document.querySelector('#portfolio-pagination .page-item.active a').getAttribute('data-page')).toBe('2');

    click(document.querySelector('#portfolio-pagination a[data-page="prev"]'));
    expect(document.querySelector('#portfolio-pagination .page-item.active a').getAttribute('data-page')).toBe('1');
  });

  test('clicking a disabled prev on page 1 keeps page 1 active', () => {
    click(document.querySelector('#portfolio-pagination a[data-page="prev"]'));
    expect(document.querySelector('#portfolio-pagination .page-item.active a').getAttribute('data-page')).toBe('1');
  });
});

describe('filtering', () => {
  beforeEach(() => {
    buildPortfolioDom(TEN_ITEMS);
    loadScript('assets/js/main.js');
  });

  test('selecting a category filters items and resets to page 1', () => {
    // Move off page 1 first.
    clickPage('3');
    click(document.querySelector('#portfolio-filters li[data-filter=".filter-web"]'));

    // 6 web items => page 1 shows 4, all visible ones are web.
    const visible = visibleItems();
    expect(visible.length).toBe(PER_PAGE);
    visible.forEach((el) => expect(el.classList.contains('filter-web')).toBe(true));
    expect(document.querySelector('#portfolio-pagination .page-item.active a').getAttribute('data-page')).toBe('1');
    expect(document.querySelector('#portfolio-filters .filter-active').getAttribute('data-filter')).toBe('.filter-web');
  });

  test('a category that fits on one page hides pagination', () => {
    click(document.querySelector('#portfolio-filters li[data-filter=".filter-mobile"]'));
    expect(visibleItems().length).toBe(1);
    expect(document.querySelector('#portfolio-pagination').innerHTML).toBe('');
  });

  test('switching back to All shows the full first page again', () => {
    click(document.querySelector('#portfolio-filters li[data-filter=".filter-mobile"]'));
    click(document.querySelector('#portfolio-filters li[data-filter="*"]'));
    expect(visibleItems().length).toBe(PER_PAGE);
  });
});

describe('portfolio detail links', () => {
  test('rewrites More Details links to include the project id', () => {
    buildPortfolioDom(['filter-web', 'filter-cloud']);
    loadScript('assets/js/main.js');

    const link = document.querySelector('.portfolio-item[data-id="proj-0"] a[title="More Details"]');
    expect(link.getAttribute('href')).toBe('portfolio-details.html?id=proj-0');
  });
});
