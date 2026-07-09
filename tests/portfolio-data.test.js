/**
 * Unit tests for assets/js/portfolio-data.js
 *
 * Covers the getPortfolioProject() lookup helper and validates the integrity of
 * the PORTFOLIO_PROJECTS dataset that the rest of the site renders from.
 */
const { loadScript } = require('./helpers/loadScript');

let getPortfolioProject;
let PORTFOLIO_PROJECTS;
let PORTFOLIO_BY_ID;

beforeAll(() => {
  loadScript('assets/js/portfolio-data.js', [
    'getPortfolioProject',
    'PORTFOLIO_PROJECTS',
    'PORTFOLIO_BY_ID',
  ]);
  getPortfolioProject = globalThis.getPortfolioProject;
  PORTFOLIO_PROJECTS = globalThis.PORTFOLIO_PROJECTS;
  PORTFOLIO_BY_ID = globalThis.PORTFOLIO_BY_ID;
});

describe('PORTFOLIO_PROJECTS dataset', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(PORTFOLIO_PROJECTS)).toBe(true);
    expect(PORTFOLIO_PROJECTS.length).toBeGreaterThan(0);
  });

  test('every project id is unique', () => {
    const ids = PORTFOLIO_PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('every project has the required non-empty fields', () => {
    const requiredStringFields = [
      'id',
      'title',
      'category',
      'categoryDetail',
      'client',
      'date',
      'role',
      'stack',
    ];
    PORTFOLIO_PROJECTS.forEach((project) => {
      requiredStringFields.forEach((field) => {
        expect(typeof project[field]).toBe('string');
        expect(project[field].length).toBeGreaterThan(0);
      });
      // url may be an empty string, but the key must exist and be a string.
      expect(typeof project.url).toBe('string');
    });
  });

  test('overview and features are non-empty string arrays', () => {
    PORTFOLIO_PROJECTS.forEach((project) => {
      expect(Array.isArray(project.overview)).toBe(true);
      expect(project.overview.length).toBeGreaterThan(0);
      project.overview.forEach((line) => {
        expect(typeof line).toBe('string');
        expect(line.trim().length).toBeGreaterThan(0);
      });

      expect(Array.isArray(project.features)).toBe(true);
      expect(project.features.length).toBeGreaterThan(0);
      project.features.forEach((feature) => {
        expect(typeof feature).toBe('string');
        expect(feature.trim().length).toBeGreaterThan(0);
      });
    });
  });

  test('non-empty url values are absolute http(s) URLs', () => {
    PORTFOLIO_PROJECTS.filter((p) => p.url).forEach((project) => {
      expect(project.url).toMatch(/^https?:\/\//);
    });
  });
});

describe('PORTFOLIO_BY_ID index', () => {
  test('maps every project id to its project object', () => {
    expect(Object.keys(PORTFOLIO_BY_ID).length).toBe(PORTFOLIO_PROJECTS.length);
    PORTFOLIO_PROJECTS.forEach((project) => {
      expect(PORTFOLIO_BY_ID[project.id]).toBe(project);
    });
  });
});

describe('getPortfolioProject()', () => {
  test('returns the matching project for a known id', () => {
    const target = PORTFOLIO_PROJECTS[3];
    expect(getPortfolioProject(target.id)).toBe(target);
  });

  test('returns the first project as a fallback for an unknown id', () => {
    expect(getPortfolioProject('does-not-exist')).toBe(PORTFOLIO_PROJECTS[0]);
  });

  test('falls back to the first project for null/undefined/empty ids', () => {
    expect(getPortfolioProject(null)).toBe(PORTFOLIO_PROJECTS[0]);
    expect(getPortfolioProject(undefined)).toBe(PORTFOLIO_PROJECTS[0]);
    expect(getPortfolioProject('')).toBe(PORTFOLIO_PROJECTS[0]);
  });

  test('does not fall back for the first project itself', () => {
    const first = PORTFOLIO_PROJECTS[0];
    expect(getPortfolioProject(first.id)).toBe(first);
  });
});
