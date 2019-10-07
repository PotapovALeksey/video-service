import axios from 'axios';

const BASE_URL = 'https://leatherfighter.com/';
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
const WATCH = 'watch/';
const VIEW = 'view/';
const PICTURES = 'pictures/';
const VIDEOS = 'videos/';
const VIDEO_ID = id => `${VIDEOS}${id}`;
const LOGIN = 'login';
const SEARCH = value => `search/${value}`;
const CARD = 'cart';
const CARD_ADD = `${CARD}/add`;
const CARD_CHECK = `${CARD}/check`;
const BREADCRUMBS = 'breadcrumbs';

const TOP_CATEGORIES = `top-${CATEGORIES}`;
const CATEGORIES_ALL = `${CATEGORIES}-all`;

const PREVIEW_IMG = `${BASE_URL}preview/`;

const concatURL = (url1, url2) => `/${url1}${url2}`;

const httpClient = axios.create({
  baseURL: BASE_URL,
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
async function getCategoryID(category, page = 1, limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    page,
    limit,
  };
  const data = await httpClient.post(
    `${BASE_URL}${CATEGORY_ID(category)}?=page=${page}`,
    params,
  );

  return data;
}

/** GET category videos ALL from API */
async function getCategoryVideosAll(limit = 12) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit,
  };
  const data = await httpClient.post(CATEGORIES_ALL, params);

  return data;
}

/** GET VIDEO by ID from API */
async function getVideoID(id) {
  const token = await getToken();

  const params = {
    _token: token.default,
    limit: 0,
  };
  const data = await httpClient.post(VIDEO_ID(id), params);

  return data;
}

/** LOGIN */
async function login(email, password) {
  const token = await getToken();

  const params = {
    _token: token.default,
    email,
    password,
  };
  const data = await httpClient.post(LOGIN, params);

  return data;
}

/** SEARCH */
async function search(value = 'a', page = 1, limit = 15) {
  const token = await getToken();

  const params = {
    _token: token.default,
    page,
    limit,
  };

  const data = await httpClient.post(SEARCH(value), params);

  return data;
}

/** BASKET ADD*/
async function bascketAdd(productId, productType) {
  // const token = await getToken();

  const token = {
    default: 'abc',
  };

  let savedToken = localStorage.getItem('cart_token');

  if (savedToken === null) {
    localStorage.setItem('cart_token', token.default);
  }

  const params = {
    cart_token: savedToken,
    product_id: productId,
    product_type: productType,
  };

  const data = await httpClient.post(CARD_ADD, params);

  return data;
}

/** BASKET CHECK*/
async function bascketCheck() {
  // const token = await getToken();
  const token = {
    default: 'abc',
  };

  bascketAdd('sequi-neque-assumenda-sed1', 'pics');

  let savedToken = localStorage.getItem('cart_token');

  if (savedToken === null) {
    localStorage.setItem('cart_token', token.default);
  }

  const params = {
    cart_token: savedToken,
  };
  const data = await httpClient.post(CARD_CHECK, params);

  return data;
}

/** BREADCRUMBS*/
async function breadcrumbs() {
  const token = await getToken();

  const params = {
    _token: token.default,
  };
  const data = await httpClient.post(BREADCRUMBS, params);

  return data;
}

export {
  CATEGORIES,
  CATEGORIES_FEATURED,
  PREVIEW_IMG,
  VIDEOS,
  WATCH,
  PICTURES,
  VIEW,
  concatURL,
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
  getCategoryID,
  getCategoryVideosAll,
  getVideoID,
  login,
  search,
  bascketAdd,
  bascketCheck,
  breadcrumbs,
};
