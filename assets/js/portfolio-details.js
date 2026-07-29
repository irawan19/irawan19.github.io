/**
 * Dynamic portfolio detail page renderer + SEO
 */
(function() {
  if (!document.body.classList.contains('portfolio-details-page')) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const project = getPortfolioProject(projectId);
  const baseUrl = 'https://irawan19.github.io';
  const pageUrl = projectId
    ? baseUrl + '/portfolio-details.html?id=' + encodeURIComponent(projectId)
    : baseUrl + '/portfolio-details.html';

  const pageTitle = document.querySelector('.page-title h1');
  const breadcrumbCurrent = document.querySelector('.breadcrumbs .current');
  const swiperWrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
  const infoList = document.querySelector('.portfolio-info ul');
  const descriptionSection = document.querySelector('.portfolio-description');

  if (!project || !pageTitle) return;

  const seoTitle = project.title + ' | Irawan Agung Nugroho — Portfolio';
  const seoDesc = (project.overview[0] + ' Project by Irawan Agung Nugroho, Full Stack Engineer.').substring(0, 160);

  document.title = seoTitle;

  function setMeta(name, content, isProperty) {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  setMeta('description', seoDesc);
  setMeta('keywords', 'Irawan Agung Nugroho, ' + project.title + ', ' + project.stack + ', portfolio, Full Stack Engineer');
  setMeta('og:title', seoTitle, true);
  setMeta('og:description', seoDesc, true);
  setMeta('og:url', pageUrl, true);
  setMeta('twitter:title', seoTitle);
  setMeta('twitter:description', seoDesc);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  const jsonLdEl = document.getElementById('portfolio-jsonld');
  if (jsonLdEl) {
    jsonLdEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Irawan Agung Nugroho', item: baseUrl + '/' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: baseUrl + '/#portfolio' },
            { '@type': 'ListItem', position: 3, name: project.title, item: pageUrl }
          ]
        },
        {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.overview[0],
          url: pageUrl,
          dateCreated: project.date,
          author: {
            '@type': 'Person',
            name: 'Irawan Agung Nugroho',
            url: baseUrl + '/',
            jobTitle: 'Full Stack Engineer',
            sameAs: [
              'https://linkedin.com/in/irawanagungnugroho',
              'https://github.com/irawan19'
            ]
          },
          keywords: project.stack,
          genre: project.category
        }
      ]
    });
  }

  pageTitle.textContent = project.title;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = project.title;

  if (swiperWrapper) {
    swiperWrapper.innerHTML = '';
    var imgUrl = 'assets/img/portfolio/' + project.id + '.png';
    for (let i = 0; i < 3; i++) {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = '<img src="' + imgUrl + '" alt="' + project.title + ' by Irawan Agung Nugroho" class="img-fluid" loading="lazy">';
      swiperWrapper.appendChild(slide);
    }
  }

  if (infoList) {
    const urlItem = project.url
      ? '<li><strong>Project URL</strong>: <a href="' + project.url + '" target="_blank" rel="noopener">' + project.url.replace(/^https?:\/\//, '') + '</a></li>'
      : '';
    infoList.innerHTML =
      '<li><strong>Category</strong>: ' + project.categoryDetail + '</li>' +
      '<li><strong>Client</strong>: ' + project.client + '</li>' +
      '<li><strong>Project date</strong>: ' + project.date + '</li>' +
      urlItem +
      '<li><strong>Role</strong>: ' + project.role + '</li>' +
      '<li><strong>Tech Stack</strong>: ' + project.stack + '</li>' +
      '<li><strong>Developer</strong>: <a href="index.html">Irawan Agung Nugroho</a></li>';
  }

  if (descriptionSection) {
    const icons = ['bi-check-circle-fill', 'bi-gear-fill', 'bi-laptop', 'bi-cloud-fill', 'bi-phone-fill', 'bi-database-fill', 'bi-shield-check', 'bi-graph-up', 'bi-people-fill', 'bi-file-earmark-text', 'bi-map', 'bi-tools'];
    const overviewHtml = project.overview.map(function(p) {
      return '<p>' + p + '</p>';
    }).join('');

    const featuresHtml = project.features.map(function(feature, index) {
      const icon = icons[index % icons.length];
      return '<div class="col-md-6">' +
        '<div class="feature-item" data-aos="fade-up" data-aos-delay="' + (400 + index * 100) + '">' +
        '<i class="bi ' + icon + '"></i>' +
        '<h4>' + feature + '</h4>' +
        '</div></div>';
    }).join('');

    descriptionSection.innerHTML =
      '<h2>Project Overview</h2>' +
      overviewHtml +
      '<p><em>Developed by <strong>Irawan Agung Nugroho</strong>, Full Stack Engineer.</em></p>' +
      '<div class="features mt-4">' +
      '<h3>Key Features &amp; Modules</h3>' +
      '<div class="row gy-3">' + featuresHtml + '</div>' +
      '</div>';
  }
})();
