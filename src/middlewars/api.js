import axios from 'axios';

const CATEGORIES = '/categories';

const httpClient = axios.create({
  baseURL: 'http://video.blancweb.com.ua',
  headers: { 'Content-Type': 'application/json' },
});

export async function getCategories() {
  const token = await import('../index');

  const params = {
    _token: token.default,
    limit: 0,
  };
  const data = await httpClient.post(CATEGORIES, params);
  console.log('data', data);
  return data;
}
