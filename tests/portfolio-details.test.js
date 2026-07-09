/**
 * Unit tests for assets/js/portfolio-details.js
 *
 * The module is an IIFE that renders a portfolio project (looked up by the `id`
 * query-string param via getPortfolioProject from portfolio-data.js) into the
 * detail page and injects SEO metadata. These tests build the relevant DOM,
 * point the URL at a project id, execute the script, and assert the rendered
 * output + generated meta/canonical/JSON-LD.
 */
const { loadScript } = require('./helpers/loadScript');

function buildDom({ withDetailsClass = true } = {}) {
  document.head.innerHTML =
    '<title>Portfolio Details</title>' +
    '<meta name="description" content="orig">' +
    '<meta name="keywords" content="orig">' +
    '<script type="application/ld+json" id="portfolio-jsonld">{}</script>';
  document.body.className = withDetailsClass ? 'portfolio-details-page' : '';
  document.body.innerHTML =
    '<div class="page-title"><h1>Portfolio Details</h1>' +
    '<nav class="breadcrumbs"><ol><li class="current">Portfolio Details</li></ol></nav></div>' +
    '<div class="portfolio-details-slider"><div class="swiper-wrapper"></div></div>' +
    '<div class="portfolio-info"><ul></ul></div>' +
    '<div class="portfolio-description"><p>Loading...</p></div>';
}

function loadWithId(id) {
  const search = id === null ? '' : '?id=' + encodeURIComponent(id);
  window.history.replaceState({}, '', '/portfolio-details.html' + search);
  loadScript('assets/js/portfolio-data.js', ['getPortfolioProject', 'PORTFOLIO_PROJECTS']);
  loadScript('assets/js/portfolio-details.js');
}

let PORTFOLIO_PROJECTS;

beforeEach(() => {
  buildDom();
  // Load the dataset once to know what we're asserting against.
  loadScript('assets/js/portfolio-data.js', ['getPortfolioProject', 'PORTFOLIO_PROJECTS']);
  PORTFOLIO_PROJECTS = globalThis.PORTFOLIO_PROJECTS;
});

describe('early exit guards', () => {
  test('does nothing when body is not a portfolio-details-page', () => {
    buildDom({ withDetailsClass: false });
    window.history.replaceState({}, '', '/portfolio-details.html?id=icp-bnpt');
    loadScript('assets/js/portfolio-details.js');
    expect(document.title).toBe('Portfolio Details');
    expect(document.querySelector('.page-title h1').textContent).toBe('Portfolio Details');
  });

  test('does nothing when the page title element is missing', () => {
    buildDom();
    document.querySelector('.page-title h1').remove();
    window.history.replaceState({}, '', '/portfolio-details.html?id=icp-bnpt');
    loadScript('assets/js/portfolio-data.js', ['getPortfolioProject']);
    loadScript('assets/js/portfolio-details.js');
    // description meta should stay untouched since the script returned early.
    expect(document.querySelector('meta[name="description"]').getAttribute('content')).toBe('orig');
  });
});

describe('rendering a known project', () => {
  const projectId = 'icp-bnpt';
  let project;

  beforeEach(() => {
    project = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    loadWithId(projectId);
  });

  test('sets the page title, document title and breadcrumb', () => {
    expect(document.querySelector('.page-title h1').textContent).toBe(project.title);
    expect(document.querySelector('.breadcrumbs .current').textContent).toBe(project.title);
    expect(document.title).toBe(project.title + ' | Irawan Agung Nugroho — Portfolio');
  });

  test('updates description/keywords and Open Graph + Twitter meta', () => {
    const desc = document.querySelector('meta[name="description"]').getAttribute('content');
    expect(desc).toContain(project.overview[0].substring(0, 40));
    expect(desc.length).toBeLessThanOrEqual(160);

    expect(document.querySelector('meta[name="keywords"]').getAttribute('content')).toContain(project.title);
    expect(document.querySelector('meta[property="og:title"]').getAttribute('content')).toContain(project.title);
    expect(document.querySelector('meta[property="og:url"]').getAttribute('content')).toBe(
      'https://irawan19.github.io/portfolio-details.html?id=' + projectId
    );
    expect(document.querySelector('meta[name="twitter:description"]')).not.toBeNull();
  });

  test('sets a canonical link to the project URL', () => {
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).not.toBeNull();
    expect(canonical.href).toBe('https://irawan19.github.io/portfolio-details.html?id=' + projectId);
  });

  test('populates JSON-LD structured data with the project', () => {
    const data = JSON.parse(document.getElementById('portfolio-jsonld').textContent);
    const graph = data['@graph'];
    const creativeWork = graph.find((node) => node['@type'] === 'CreativeWork');
    expect(creativeWork.name).toBe(project.title);
    expect(creativeWork.keywords).toBe(project.stack);

    const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList');
    const last = breadcrumb.itemListElement[breadcrumb.itemListElement.length - 1];
    expect(last.name).toBe(project.title);
  });

  test('renders one swiper slide per configured image', () => {
    const slides = document.querySelectorAll('.portfolio-details-slider .swiper-wrapper .swiper-slide');
    expect(slides.length).toBe(3);
    slides.forEach((slide) => {
      expect(slide.querySelector('img').getAttribute('alt')).toContain(project.title);
    });
  });

  test('renders the project info list including the project URL', () => {
    const infoHtml = document.querySelector('.portfolio-info ul').innerHTML;
    expect(infoHtml).toContain(project.categoryDetail);
    expect(infoHtml).toContain(project.client);
    expect(infoHtml).toContain(project.date);
    expect(infoHtml).toContain(project.role);
    expect(infoHtml).toContain(project.stack);
    expect(infoHtml).toContain(project.url.replace(/^https?:\/\//, ''));
  });

  test('renders overview paragraphs and one feature item per feature', () => {
    const section = document.querySelector('.portfolio-description');
    expect(section.querySelector('h2').textContent).toBe('Project Overview');
    const featureItems = section.querySelectorAll('.feature-item');
    expect(featureItems.length).toBe(project.features.length);
    expect(section.textContent).toContain(project.features[0]);
  });
});

describe('rendering a project without a URL', () => {
  test('omits the Project URL list item', () => {
    const noUrlProject = PORTFOLIO_PROJECTS.find((p) => !p.url);
    expect(noUrlProject).toBeDefined();
    loadWithId(noUrlProject.id);
    expect(document.querySelector('.portfolio-info ul').innerHTML).not.toContain('Project URL');
  });
});

describe('unknown / missing id', () => {
  test('falls back to the first project when id is unknown', () => {
    loadWithId('nope-not-real');
    expect(document.querySelector('.page-title h1').textContent).toBe(PORTFOLIO_PROJECTS[0].title);
  });

  test('falls back to the first project when id is absent', () => {
    loadWithId(null);
    expect(document.querySelector('.page-title h1').textContent).toBe(PORTFOLIO_PROJECTS[0].title);
  });
});
