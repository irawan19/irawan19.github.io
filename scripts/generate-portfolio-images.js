/**
 * Generates PNG placeholder images for each portfolio project.
 * Run: node scripts/generate-portfolio-images.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PORTFOLIO_DIR = path.join(__dirname, '..', 'assets', 'img', 'portfolio');

var CATEGORY_THEMES = {
  'Cloud & Enterprise': {
    gradient: ['#1a2b4a', '#2d5a8f', '#3b82f6'],
    accent: '#60a5fa',
    glow: 'rgba(59,130,246,0.35)'
  },
  'Web Application': {
    gradient: ['#0c3b2e', '#0d7050', '#10b981'],
    accent: '#34d399',
    glow: 'rgba(16,185,129,0.35)'
  },
  'Mobile & Fullstack': {
    gradient: ['#2d1b4e', '#6d28d9', '#a855f7'],
    accent: '#c084fc',
    glow: 'rgba(168,85,247,0.35)'
  }
};

var ICON_PATHS = {
  pos: '<path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L23 8H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
  finance: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  lms: '<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  profile: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9v0M9 12v0M9 15v0" stroke-width="2" stroke-linecap="round"/>',
  ticket: '<path d="M3 9a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5v2M13 17v2M13 11v2" stroke-width="2" stroke-linecap="round"/>',
  stream: '<rect x="2" y="6" width="14" height="12" rx="2" stroke-width="2"/><path d="M16 10l6-3v10l-6-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  lab: '<path d="M9 2v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 2h8" stroke-width="2" stroke-linecap="round"/>',
  bus: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 11h16M9 4v3M15 4v3" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/>',
  inventory: '<path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7l9 4 9-4M12 11v10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  currency: '<circle cx="12" cy="12" r="10" stroke-width="2"/><path d="M14.5 9.5a2.5 2.5 0 0 0-2.5-1.5c-1.4 0-2.5.6-2.5 2s1.1 2 2.5 2 2.5.6 2.5 2-1.1 2-2.5 2a2.5 2.5 0 0 1-2.5-1.5M12 6v12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  government: '<path d="M3 21h18M4 21V10M20 21V10M2 10h20M12 3L2 10h20L12 3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 21v-7M12 21v-7M16 21v-7" stroke-width="2" stroke-linecap="round"/>',
  travel: '<path d="M17.8 19.2L16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l4.5 4.5-2.7 2.7-3-.7-1.5 1.5 4 2 2 4 1.5-1.5-.7-3 2.7-2.7 4.5 4.5a1 1 0 0 0 1.7-.9z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  game: '<rect x="2" y="6" width="20" height="12" rx="2" stroke-width="2"/><path d="M7 12h4M9 10v4M15 11v0M18 13v0" stroke-width="2" stroke-linecap="round"/>',
  network: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke-width="2"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke-width="2" stroke-linecap="round"/>',
  school: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5h6v5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M8 13h8M8 17h5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  spa: '<path d="M12 22c0-4 2-6 2-10a6 6 0 0 0-12 0c0 4 2 6 2 10M12 22c0-4-2-6-2-10a6 6 0 0 1 12 0c0 4-2 6-2 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  agriculture: '<path d="M12 10c0-4 2-6 4-6s4 2 4 6c0 4-4 4-8 4s-8 0-8-4c0-4 2-6 4-6s4 2 4 6M12 10v12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  furniture: '<path d="M3 7v10M21 7v10M6 9h12M6 9V5h12v4M5 17h14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  automotive: '<path d="M5 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke-width="2"/><path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v4h-2v-2H5v2H3v-4z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  hotel: '<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7v0M15 7v0M9 11v0M15 11v0M9 15v0M15 15v0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  music: '<path d="M9 18V5l12-2v13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke-width="2"/><circle cx="18" cy="16" r="3" stroke-width="2"/>',
  savings: '<path d="M19 5h-2a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9h6" stroke-width="2" stroke-linecap="round"/>',
  museum: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 11v0M15 11v0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  tourism: '<path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.5" stroke-width="2"/>',
  coolbox: '<rect x="3" y="6" width="18" height="14" rx="2" stroke-width="2"/><path d="M3 10h18M12 6V4" stroke-width="2" stroke-linecap="round"/>',
  default: '<rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2"/><path d="M9 9h6v6H9z" stroke-width="2"/>'
};

var KEYWORD_MAP = [
  { keys: ['pos', 'point of sale', 'cashier', 'retail'], icon: 'pos' },
  { keys: ['financial', 'finance', 'trading', 'ledger', 'wallet', 'budget'], icon: 'finance' },
  { keys: ['lms', 'learning', 'hospitality', 'education', 'training'], icon: 'lms' },
  { keys: ['company profile', 'profile', 'promotional'], icon: 'profile' },
  { keys: ['ticket', 'ticketing', 'booking', 'reservation'], icon: 'ticket' },
  { keys: ['stream', 'live', 'video', 'hlwint'], icon: 'stream' },
  { keys: ['lab', 'laboratorium', 'laboratory', 'uji', 'testing'], icon: 'lab' },
  { keys: ['bus', 'route', 'locate', 'brickston'], icon: 'bus' },
  { keys: ['inventory', 'tracking', 'citracker', 'spare parts'], icon: 'inventory' },
  { keys: ['currency', 'exchange', 'fl121'], icon: 'currency' },
  { keys: ['government', 'kementerian', 'muhammadiyah', 'agriculture', 'pertanian', 'emusrenbangtan', 'eplanning', 'sikp', 'conservation'], icon: 'government' },
  { keys: ['travel', 'tour', 'jogja mitra', 'mutiara', 'pasteur', 'umrah', 'hajj'], icon: 'travel' },
  { keys: ['game', 'trivia', 'whatsapp'], icon: 'game' },
  { keys: ['network', 'infrastructure', 'cctv'], icon: 'network' },
  { keys: ['school', 'smki', 'student'], icon: 'school' },
  { keys: ['document', 'letter', 'disposition', 'memotis', 'correspondence', 'agenda'], icon: 'document' },
  { keys: ['spa', 'wellness', 'walet', 'healthy'], icon: 'spa' },
  { keys: ['agriculture', 'agricultural', 'kawasan', 'tani', 'indotani'], icon: 'agriculture' },
  { keys: ['furniture', 'asram'], icon: 'furniture' },
  { keys: ['automotive', 'nasmoco', 'sales marketing', 'toyota'], icon: 'automotive' },
  { keys: ['hotel', 'reservation', 'media information'], icon: 'hotel' },
  { keys: ['music', 'studio', 'rental'], icon: 'music' },
  { keys: ['savings', 'loan', 'simpan pinjam'], icon: 'savings' },
  { keys: ['museum'], icon: 'museum' },
  { keys: ['tourism', 'yogyakarta tourism'], icon: 'tourism' },
  { keys: ['cool box', 'cooler', 'peltier'], icon: 'coolbox' },
  { keys: ['genesis', 'gendhis', 'distribution'], icon: 'finance' },
  { keys: ['peruri', 'signing', 'digital', 'scm'], icon: 'document' },
  { keys: ['icp', 'collaboration', 'platform', 'intelligent'], icon: 'network' },
  { keys: ['adhyaksa', 'pedia', 'legal', 'law'], icon: 'document' },
  { keys: ['analisis', 'data', 'asset', 'pemulihan', 'kejaksaan'], icon: 'inventory' }
];

function getIcon(project) {
  var text = ((project.title || '') + ' ' + (project.categoryDetail || '') + ' ' + (project.client || '')).toLowerCase();
  for (var i = 0; i < KEYWORD_MAP.length; i++) {
    var entry = KEYWORD_MAP[i];
    for (var j = 0; j < entry.keys.length; j++) {
      if (text.indexOf(entry.keys[j]) !== -1) return entry.icon;
    }
  }
  return 'default';
}

function getTheme(project) {
  return CATEGORY_THEMES[project.category] || CATEGORY_THEMES['Cloud & Enterprise'];
}

function escapeXml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function getInitials(title) {
  var words = String(title).replace(/[^a-zA-Z0-9\s]/g, '').trim().split(/\s+/);
  if (words.length <= 1) return words[0] ? words[0].substring(0, 2).toUpperCase() : 'PR';
  return (words[0][0] + words[1][0]).toUpperCase();
}

function wrapText(text, maxLen) {
  var words = text.split(' ');
  var lines = [];
  var current = '';
  for (var i = 0; i < words.length; i++) {
    if ((current + ' ' + words[i]).trim().length > maxLen) {
      if (current) lines.push(current.trim());
      current = words[i];
    } else {
      current += ' ' + words[i];
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

function generateSVG(project) {
  var theme = getTheme(project);
  var iconKey = getIcon(project);
  var iconPath = ICON_PATHS[iconKey] || ICON_PATHS['default'];
  var initials = getInitials(project.title);
  var catEsc = escapeXml(project.categoryDetail || project.category);
  var dateEsc = escapeXml(project.date || '');
  var stackEsc = escapeXml((project.stack || '').substring(0, 60));
  var featureCount = project.features ? project.features.length : 0;

  var titleLines = wrapText(project.title, 28);
  var titleLineHeight = 24;
  var titleZoneTop = 175;
  var titleZoneBottom = 235;
  var titleZoneHeight = titleZoneBottom - titleZoneTop;
  var titleBlockHeight = titleLines.length * titleLineHeight;
  var titleStartY = titleZoneTop + (titleZoneHeight - titleBlockHeight) / 2 + titleLineHeight * 0.75;

  var titleSvg = titleLines.map(function (line, i) {
    return '<text x="300" y="' + Math.round(titleStartY + i * titleLineHeight) + '" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="22" font-weight="700" fill="#ffffff">' + escapeXml(line) + '</text>';
  }).join('');

  var hexPattern = '';
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 12; col++) {
      var x = col * 55 + (row % 2 === 0 ? 0 : 27.5);
      var y = row * 48;
      var opacity = 0.03 + ((row * 12 + col) % 7) * 0.008;
      hexPattern += '<polygon points="' +
        (x + 25) + ',' + y + ' ' +
        (x + 50) + ',' + (y + 14) + ' ' +
        (x + 50) + ',' + (y + 42) + ' ' +
        (x + 25) + ',' + (y + 56) + ' ' +
        x + ',' + (y + 42) + ' ' +
        x + ',' + (y + 14) +
        '" fill="' + theme.accent + '" opacity="' + opacity.toFixed(3) + '"/>';
    }
  }

  var featureBadges = '';
  if (featureCount > 0) {
    var badgesToShow = Math.min(featureCount, 4);
    var badgeWidth = 80;
    var badgeGap = 8;
    var totalWidth = badgesToShow * badgeWidth + (badgesToShow - 1) * badgeGap;
    var startX = (600 - totalWidth) / 2;
    for (var b = 0; b < badgesToShow; b++) {
      var bx = startX + b * (badgeWidth + badgeGap);
      var featureLabel = project.features[b].length > 18 ? project.features[b].substring(0, 16) + '\u2026' : project.features[b];
      featureBadges += '<rect x="' + bx + '" y="300" width="' + badgeWidth + '" height="22" rx="11" fill="rgba(255,255,255,0.12)" stroke="' + theme.accent + '" stroke-width="1" stroke-opacity="0.4"/>' +
        '<text x="' + (bx + badgeWidth / 2) + '" y="315" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" fill="rgba(255,255,255,0.85)">' + escapeXml(featureLabel) + '</text>';
    }
  }

  return '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">' +
    '<defs>' +
    '<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="' + theme.gradient[0] + '"/>' +
    '<stop offset="50%" stop-color="' + theme.gradient[1] + '"/>' +
    '<stop offset="100%" stop-color="' + theme.gradient[2] + '"/>' +
    '</linearGradient>' +
    '<radialGradient id="glow" cx="50%" cy="30%" r="45%">' +
    '<stop offset="0%" stop-color="' + theme.glow + '"/>' +
    '<stop offset="100%" stop-color="transparent"/>' +
    '</radialGradient>' +
    '</defs>' +
    '<rect width="600" height="400" fill="url(#bg)"/>' +
    '<rect width="600" height="400" fill="url(#glow)"/>' +
    '<g opacity="0.8">' + hexPattern + '</g>' +
    '<rect x="0" y="0" width="600" height="400" fill="rgba(0,0,0,0.15)"/>' +
    '<circle cx="300" cy="80" r="42" fill="rgba(255,255,255,0.08)" stroke="' + theme.accent + '" stroke-width="1.5" stroke-opacity="0.5"/>' +
    '<g transform="translate(281,61) scale(1.6)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">' +
    iconPath +
    '</g>' +
    '<rect x="255" y="132" width="90" height="24" rx="12" fill="rgba(255,255,255,0.1)" stroke="' + theme.accent + '" stroke-width="1" stroke-opacity="0.4"/>' +
    '<text x="300" y="148" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="600" fill="' + theme.accent + '">' + initials + '</text>' +
    '<line x1="180" y1="168" x2="420" y2="168" stroke="' + theme.accent + '" stroke-width="1" stroke-opacity="0.25"/>' +
    titleSvg +
    '<text x="300" y="255" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.6)">' + catEsc + '</text>' +
    '<text x="300" y="275" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="11" fill="rgba(255,255,255,0.4)">' + dateEsc + ' \u2022 ' + escapeXml(String(featureCount)) + ' features</text>' +
    featureBadges +
    '<text x="300" y="370" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.3)">' + stackEsc + '</text>' +
    '</svg>';
}

function loadProjects() {
  var filePath = path.join(__dirname, '..', 'assets', 'js', 'portfolio-data.js');
  var content = fs.readFileSync(filePath, 'utf8');
  var match = content.match(/const\s+PORTFOLIO_PROJECTS\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error('Could not extract PORTFOLIO_PROJECTS from portfolio-data.js');
  return JSON.parse(match[1]);
}

async function main() {
  if (!fs.existsSync(PORTFOLIO_DIR)) {
    fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });
  }

  var projects = loadProjects();
  console.log('Generating ' + projects.length + ' portfolio images...');

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var svg = generateSVG(project);
    var outPath = path.join(PORTFOLIO_DIR, project.id + '.png');

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outPath);

    console.log('  ✓ ' + project.id + '.png');
  }

  console.log('\nDone! ' + projects.length + ' PNG files generated in ' + path.relative(process.cwd(), PORTFOLIO_DIR));
}

main().catch(function(err) {
  console.error('Error:', err);
  process.exit(1);
});
