import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '169'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '742'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '472'),
            routes: [
              {
                path: '/docs/category/investment',
                component: ComponentCreator('/docs/category/investment', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/技術',
                component: ComponentCreator('/docs/category/技術', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/自媒體兒',
                component: ComponentCreator('/docs/category/自媒體兒', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/investment/indexinvestmnet',
                component: ComponentCreator('/docs/investment/indexinvestmnet', '131'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/self-media/indexinvestmnet',
                component: ComponentCreator('/docs/self-media/indexinvestmnet', '903'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/self-media/tiktok',
                component: ComponentCreator('/docs/self-media/tiktok', 'c19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech/dyin',
                component: ComponentCreator('/docs/tech/dyin', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
