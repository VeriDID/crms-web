import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '@/pages/index';
import AboutPage from '@/pages/about/about';
import Layout from '@/components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout as the base
    children: [
      { path: '/', element: <IndexPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);
