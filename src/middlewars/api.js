import axios from 'axios';

const CATEGORIES = 'categories';
const CATEGORIES_PROMOTED = `${CATEGORIES}/promoted`;
const CATEGORIES_FEATURED = `${CATEGORIES}/featured`;
const CATEGORIES_LATEST = `${CATEGORIES}/latest`;
const CATEGORIES_TOP = `${CATEGORIES}/top`;
const CATEGORIES_WHATS_NEW = `${CATEGORIES}/whats-new`;
const CATEGORIES_FREE = `${CATEGORIES}/free`;
const CATEGORIES_POPULAR = `${CATEGORIES}/popular`;
const TOP_CATEGORIES = `top-${CATEGORIES}`;

const httpClient = axios.create({
  baseURL: 'http://video.blancweb.com.ua/',
  headers: { 'Content-Type': 'application/json' },
});

/** Get token */
const getToken = async () => {
  return await import('../index');
};

/** GET top category list from API */
async function getTopCategories() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 0,
  };
  const data = await httpClient.post(TOP_CATEGORIES, params);

  return data;
}

/** GET category list from API */
async function getCategories() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 0,
  };
  const data = await httpClient.post(CATEGORIES, params);

  return data;
}

/** GET category fetured videos from API */
async function getFeatureds() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 3,
  };
  const data = await httpClient.post(CATEGORIES_FEATURED, params);

  return data;
}

/** GET category promoted video from API */
async function getPromoted() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 3,
  };
  const data = await httpClient.post(CATEGORIES_PROMOTED, params);

  return data;
}

/** GET category latest videos from API */
async function getLatests() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 6,
  };
  const data = await httpClient.post(CATEGORIES_LATEST, params);

  return data;
}

/** GET top-category videos from API */
async function getTopVideos() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 3,
  };
  const data = await httpClient.post(CATEGORIES_TOP, params);

  return data;
}

/** GET category "whats-new" videos from API */
async function getWhatsNew(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_WHATS_NEW, params);

  return data;
}

/** GET category "free" videos from API */
async function getFreeVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_FREE, params);

  return data;
}

/** GET category "popular" videos from API */
async function getPopularVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_POPULAR, params);

  return data;
}

export {
  getTopCategories,
  getCategories,
  getFeatureds,
  getPromoted,
  getLatests,
  getTopVideos,
  getWhatsNew,
  getFreeVideos,
  getPopularVideos,
};
