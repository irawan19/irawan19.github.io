/**
 * Dynamic portfolio detail page renderer
 */
(function() {
  if (!document.body.classList.contains('portfolio-details-page')) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const project = getPortfolioProject(projectId);

  const pageTitle = document.querySelector('.page-title h1');
  const breadcrumbCurrent = document.querySelector('.breadcrumbs .current');
  const swiperWrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
  const infoList = document.querySelector('.portfolio-info ul');
  const descriptionSection = document.querySelector('.portfolio-description');

  if (!project || !pageTitle) return;

  document.title = project.title + ' - Irawan Agung Nugroho';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && project.overview[0]) {
    metaDesc.setAttribute('content', project.overview[0].substring(0, 160));
  }

  pageTitle.textContent = project.title;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = project.title;

  if (swiperWrapper) {
    swiperWrapper.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = '<img src="assets/img/portfolio/default.png" alt="' + project.title + '" class="img-fluid" loading="lazy">';
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
      '<li><strong>Tech Stack</strong>: ' + project.stack + '</li>';
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
      '<div class="features mt-4">' +
      '<h3>Key Features &amp; Modules</h3>' +
      '<div class="row gy-3">' + featuresHtml + '</div>' +
      '</div>';
  }
})();
