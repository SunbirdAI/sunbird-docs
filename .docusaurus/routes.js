import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cfa'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '64c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '3c1'),
            routes: [
              {
                path: '/category/sunbird-design-documents',
                component: ComponentCreator('/category/sunbird-design-documents', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/design-docs/frontend portals/ASR-portal/TDD',
                component: ComponentCreator('/design-docs/frontend portals/ASR-portal/TDD', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/design-docs/language/API_Architecture_Documentation',
                component: ComponentCreator('/design-docs/language/API_Architecture_Documentation', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/design-docs/language/API_Framework',
                component: ComponentCreator('/design-docs/language/API_Framework', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/design-docs/MLOps/MLOpsPlatform',
                component: ComponentCreator('/design-docs/MLOps/MLOpsPlatform', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development-process',
                component: ComponentCreator('/development-process', '4ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/onboarding',
                component: ComponentCreator('/onboarding', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/projects-and-repositories',
                component: ComponentCreator('/projects-and-repositories', '489'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/release-and-deployment',
                component: ComponentCreator('/release-and-deployment', '47d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
