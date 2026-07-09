/**
* Template Name: SnapFolio
* Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
* Updated: Jul 21 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Welcome greeting sound - plays once per page load on first interaction (termasuk saat refresh)
   */
  (function welcomeSound() {
    var base = window.location.href.split('#')[0];
    base = base.substring(0, base.lastIndexOf('/') + 1);
    var audio = new Audio(base + 'assets/sound/welcome.mp3');
    audio.volume = 0.6;
    var played = false;

    function playWelcome() {
      if (played) return;
      played = true;
      audio.play().catch(function() {
        played = false;
      });
    }

    function onFirstInteraction() {
      playWelcome();
    }

    window.addEventListener('load', function() {
      document.body.addEventListener('click', onFirstInteraction, { once: true });
      document.body.addEventListener('touchstart', onFirstInteraction, { once: true });
      document.body.addEventListener('keydown', onFirstInteraction, { once: true });
    });
  })();

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js - warna berganti per item: Electric Purple, Magenta, Neon Green, Bright Blue
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    var typedColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',').map(s => s.trim());
    selectTyped.style.color = typedColors[0];
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      preStringTyped: function(index) {
        selectTyped.style.color = typedColors[index % typedColors.length];
      }
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        PortfolioUtils.setActiveFilter(isotopeItem.querySelector('.isotope-filters'), this);
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Portfolio pagination (4 per page) and filter
   */
  (function portfolioPagination() {
    const listEl = document.getElementById('portfolio-list');
    const paginationEl = document.getElementById('portfolio-pagination');
    const filtersEl = document.getElementById('portfolio-filters');
    if (!listEl || !paginationEl) return;

    const perPage = 4;
    let currentFilter = '*';
    let currentPage = 1;

    function getVisibleItems() {
      const items = Array.from(listEl.querySelectorAll('.portfolio-item'));
      if (currentFilter === '*') return items;
      return items.filter(function(el) {
        return el.classList.contains(currentFilter.replace('.', ''));
      });
    }

    function render() {
      const visible = getVisibleItems();
      const totalPages = Math.max(1, Math.ceil(visible.length / perPage));
      currentPage = Math.min(currentPage, totalPages);
      const start = (currentPage - 1) * perPage;
      const slice = visible.slice(start, start + perPage);

      listEl.querySelectorAll('.portfolio-item').forEach(function(el) {
        el.style.display = slice.indexOf(el) !== -1 ? '' : 'none';
      });

      paginationEl.innerHTML = '';
      if (totalPages <= 1) return;

      const ul = document.createElement('ul');
      ul.className = 'pagination justify-content-center';

      const prevLi = document.createElement('li');
      prevLi.className = 'page-item' + (currentPage === 1 ? ' disabled' : '');
      prevLi.innerHTML = '<a class="page-link" href="#" data-page="prev" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
      ul.appendChild(prevLi);

      for (let p = 1; p <= totalPages; p++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (p === currentPage ? ' active' : '');
        li.innerHTML = '<a class="page-link" href="#" data-page="' + p + '">' + p + '</a>';
        ul.appendChild(li);
      }

      const nextLi = document.createElement('li');
      nextLi.className = 'page-item' + (currentPage === totalPages ? ' disabled' : '');
      nextLi.innerHTML = '<a class="page-link" href="#" data-page="next" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
      ul.appendChild(nextLi);

      paginationEl.appendChild(ul);

      ul.addEventListener('click', function(e) {
        e.preventDefault();
        const link = e.target.closest('a[data-page]');
        if (!link || link.closest('.disabled')) return;
        const page = link.getAttribute('data-page');
        if (page === 'prev') currentPage = Math.max(1, currentPage - 1);
        else if (page === 'next') currentPage = Math.min(totalPages, currentPage + 1);
        else currentPage = parseInt(page, 10);
        render();
      });
    }

    if (filtersEl) {
      filtersEl.querySelectorAll('li[data-filter]').forEach(function(li) {
        li.addEventListener('click', function(e) {
          e.preventDefault();
          PortfolioUtils.setActiveFilter(filtersEl, this);
          currentFilter = this.getAttribute('data-filter');
          currentPage = 1;
          render();
        });
      });
    }

    render();
  })();

  /**
   * Portfolio detail links from data-id
   */
  document.querySelectorAll('.portfolio-item[data-id]').forEach(function(item) {
    const id = item.getAttribute('data-id');
    const detailLink = item.querySelector('.portfolio-links a[title="More Details"]');
    if (detailLink) {
      detailLink.href = PortfolioUtils.portfolioDetailsUrl(id);
    }
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();