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

const AsyncPicturePage = Loadable({
  loader: () => import('./pages/Picture/Picture'),
  loading: Loader,
});

const AsyncCardPage = Loadable({
  loader: () => import('./pages/Card/Card'),
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
  // {
  //   path: '/videos/:id',
  //   exact: false,
  //   component: AsyncCategoryPage,
  // },
  // {
  //   path: '/videos',
  //   exact: false,
  //   component: AsyncCategoriesPage,
  // },
  {
    path: '/watch/:id',
    exact: false,
    component: AsyncCardPage,
  },
  // {
  //   path: '/pictures/:id',
  //   exact: false,
  //   component: AsyncCategoryPage,
  // },
  // {
  //   path: '/pictures',
  //   exact: false,
  //   component: AsyncCategoriesPage,
  // },
  // {
  //   path: '/view/:id',
  //   exact: false,
  //   component: AsyncPicturePage,
  // },
];
