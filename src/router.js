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

const AsyncCategoriesPage = Loadable({
  loader: () => import('./pages/Categories/Categories'),
  loading: Loader,
});

const AsyncVideoPage = Loadable({
  loader: () => import('./pages/Video/Video'),
  loading: Loader,
});

export default [
  {
    path: '/',
    exact: true,
    component: AsyncHomePage,
  },
  {
    path: '/categories/:id',
    exact: false,
    component: AsyncCategoryPage,
  },
  {
    path: '/categories',
    exact: false,
    component: AsyncCategoriesPage,
  },
  {
    path: '/watch/:id',
    exact: false,
    component: AsyncVideoPage,
  },
];
