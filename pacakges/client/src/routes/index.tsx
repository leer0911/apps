import { RouteObject } from 'react-router-dom';

import { APPLICATIONS_URL, BASE_URL } from '@/constants';
import { BasicLayout } from '@/layouts';
import { PageNotFound } from '@/pages/common/ErrorPages/PageNotFound';
import { Router } from './Router';

export const routes: RouteObject[] = [
  {
    path: BASE_URL,
    element: <Router />,
    children: [
      {
        path: APPLICATIONS_URL,
        element: <BasicLayout />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
];
