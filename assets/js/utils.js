/**
 * Shared portfolio utilities used across pages.
 * Exposed on window.PortfolioUtils; must load before main.js and
 * portfolio-details.js.
 */
(function () {
  "use strict";

  const PORTFOLIO_DETAILS_PAGE = 'portfolio-details.html';

  /**
   * Build a portfolio details URL for the given project id.
   * Returns the bare page URL when no id is provided.
   */
  function portfolioDetailsUrl(id) {
    return id
      ? PORTFOLIO_DETAILS_PAGE + '?id=' + encodeURIComponent(id)
      : PORTFOLIO_DETAILS_PAGE;
  }

  /**
   * Move the `filter-active` marker to the clicked element within a scope.
   */
  function setActiveFilter(scopeEl, clickedEl) {
    if (!scopeEl || !clickedEl) return;
    const active = scopeEl.querySelector('.filter-active');
    if (active) active.classList.remove('filter-active');
    clickedEl.classList.add('filter-active');
  }

  /**
   * Create or update a <meta> tag by name (or property) and set its content.
   */
  function upsertMeta(name, content, isProperty) {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
    return el;
  }

  /**
   * Create or update a <link> tag by rel and set its href.
   */
  function upsertLink(rel, href) {
    let el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.rel = rel;
      document.head.appendChild(el);
    }
    el.href = href;
    return el;
  }

  window.PortfolioUtils = {
    PORTFOLIO_DETAILS_PAGE: PORTFOLIO_DETAILS_PAGE,
    portfolioDetailsUrl: portfolioDetailsUrl,
    setActiveFilter: setActiveFilter,
    upsertMeta: upsertMeta,
    upsertLink: upsertLink
  };
})();
