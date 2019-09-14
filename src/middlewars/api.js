import axios from 'axios';

const CATEGORIES = 'categories';
const CATEGORIES_PROMOTED = `${CATEGORIES}/promoted`;
const CATEGORIES_FEATURED = `${CATEGORIES}/featured`;
const CATEGORIES_LATEST = `${CATEGORIES}/latest`;
const CATEGORIES_TOP = `${CATEGORIES}/top`;
const CATEGORIES_WHATS_NEW = `${CATEGORIES}/whats-new`;
const CATEGORIES_FREE = `${CATEGORIES}/free`;
const CATEGORIES_POPULAR = `${CATEGORIES}/popular`;
const CATEGORIES_GAME = `${CATEGORIES}/game`;
const CATEGORIES_KOMBAT = `${CATEGORIES}/kombat`;
const CATEGORIES_MUSIC = `${CATEGORIES}/music`;
const CATEGORIES_MOVIE = `${CATEGORIES}/movie`;
const CATEGORIES_NEWS = `${CATEGORIES}/news`;
const CATEGORY_ID = category => `${CATEGORIES}/${category}`;

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
async function getFeaturedVideos() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 3,
  };
  const data = await httpClient.post(CATEGORIES_FEATURED, params);

  return data;
}

/** GET category promoted video from API */
async function getPromotedVideos() {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 3,
  };
  const data = await httpClient.post(CATEGORIES_PROMOTED, params);

  return data;
}

/** GET category latest videos from API */
async function getLatestVideos() {
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
async function getWhatsNewVideos(limit = 12) {
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

/** GET category "game" videos from API */
async function getGameVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_GAME, params);

  return data;
}

/** GET category "kombat" videos from API */
async function getKombatVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_KOMBAT, params);

  return data;
}

/** GET category "music" videos from API */
async function getMusicVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_MUSIC, params);

  return data;
}

/** GET category "movie" videos from API */
async function getMovieVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_MOVIE, params);

  return data;
}

/** GET category "news" videos from API */
async function getNewsVideos(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_NEWS, params);

  return data;
}

/** GET category ${category} videos from API */
async function getCategoryID(category, limit = 20) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORY_ID(category), params);

  return data;
}

export {
  getTopCategories,
  getCategories,
  getFeaturedVideos,
  getPromotedVideos,
  getLatestVideos,
  getTopVideos,
  getWhatsNewVideos,
  getFreeVideos,
  getPopularVideos,
  getGameVideos,
  getKombatVideos,
  getMusicVideos,
  getMovieVideos,
  getNewsVideos,
  getCategoryID
};
