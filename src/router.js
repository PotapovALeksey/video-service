import Loadable from 'react-loadable';
import Loader from './components/Loader/Loader';

const AsyncHomePage = Loadable({
  loader: () => import('./pages/Home/Home'),
  loading: Loader,
});

const AsyncCategoryPage = Loadable({
  loader: () => import('./pages/Category/Category'),
  loading: Loader,
});

const AsyncCardPage = Loadable({
  loader: () => import('./pages/Card/Card'),
  loading: Loader,
});

const AsyncSearchPage = Loadable({
  loader: () => import('./pages/Search/Search'),
  loading: Loader,
});

const AsyncFormsPage = Loadable({
  loader: () => import('./pages/Forms/Forms'),
  loading: Loader,
});

export default [
  {
    path: '/',
    exact: true,
    component: AsyncHomePage,
  },
  {
    path: '/category/:id',
    exact: true,
    component: AsyncCategoryPage,
  },

  {
    path: '/watch/:id',
    exact: false,
    component: AsyncCardPage,
  },
  {
    path: '/search/:id',
    exact: false,
    component: AsyncSearchPage,
  },
  {
    path: '/password/reset',
    exact: false,
    component: AsyncFormsPage,
  },
  {
    path: '/login',
    exact: false,
    component: AsyncFormsPage,
  },
  {
    path: '/register',
    exact: false,
    component: AsyncFormsPage,
  },
];
