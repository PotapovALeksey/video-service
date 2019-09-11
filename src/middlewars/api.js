import axios from 'axios';

const CATEGORIES = 'categories';
const CATEGORIES_PROMOTED = `${CATEGORIES}/promoted`;
const CATEGORIES_FEATURED = `${CATEGORIES}/featured`;
const CATEGORIES_LATEST = `${CATEGORIES}/latest`;
const CATEGORIES_TOP = `${CATEGORIES}/top`;
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

export {
  getTopCategories,
  getCategories,
  getFeatureds,
  getPromoted,
  getLatests,
  getTopVideos,
};
