// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const navbarItems = require('literacy-site-theme/navbarItems');
const footerConfig = require('literacy-site-theme/footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Civic Literacy Curriculum for Kids',
  tagline: 'A structured, nonpartisan civic literacy curriculum for ages 8–12',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://literacy-for-kids.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/civic_literacy_for_kids/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'literacy-for-kids', // Usually your GitHub org/user name.
  projectName: 'civic_literacy_for_kids', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  plugins: [
    function includeLiteracyThemeBabel() {
      const path = require('path');
      const themeSrc = path.resolve(
        path.dirname(require.resolve('literacy-site-theme/package.json')),
        'src',
      );
      return {
        name: 'include-literacy-theme-babel',
        configureWebpack(config) {
          const jsRule = config.module.rules.find(
            (rule) => rule.test instanceof RegExp && rule.test.test('.jsx'),
          );
          if (jsRule && typeof jsRule.exclude === 'function') {
            const origExclude = jsRule.exclude;
            jsRule.exclude = (modulePath) => {
              if (modulePath.includes('literacy-site-theme')) return false;
              return origExclude(modulePath);
            };
          }
          return {
            module: {
              rules: [
                {
                  test: /\.[jt]sx?$/,
                  include: [themeSrc],
                  type: 'javascript/auto',
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/literacy-for-kids/civic_literacy_for_kids/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hero-image.png',
      navbar: {
        title: 'Civic Literacy for Kids',
        logo: {
          alt: 'Civic Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          ...navbarItems,
          {
            href: 'https://github.com/literacy-for-kids/civic_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
