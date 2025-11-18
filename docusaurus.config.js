// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Panduan Pengguna - Rawat ID',
  tagline: 'Sistem Informasi Manajemen Rumah Sakit dan Klinik Andalan Tenaga Kesehatan!',
  favicon: 'img/rawatid.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://panduan.rawat.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rawatid', // Usually your GitHub org/user name.
  projectName: 'rawat-03-guideline', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'panduan',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          routeBasePath: 'notes',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      metadata: [
        {name: 'keywords', content: 'rawat id, rumah sakit, klinik, sistem informasi, manajemen rumah sakit, manajemen klinik, aplikasi rumah sakit, aplikasi klinik, software rumah sakit, software klinik'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Guideline Rawat ID',
        logo: {
          alt: 'Logo Rawat ID',
          src: 'img/rawatid.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Panduan Pengguna',
          },
          {to: '/notes', label: 'Catatan Rilis', position: 'left'},
          {
            href: 'https://demo.rawat.id/',
            label: 'Demo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Panduan',
            items: [
              {
                label: 'Panduan Pengguna',
                to: '/panduan/overview',
              },
            ],
          },
          {
            title: 'Tautan',
            items: [
              {
                label: 'Rawat ID',
                href: 'https://rawat.id/',
              },
              {
                label: 'Demo Aplikasi',
                href: 'https://demo.rawat.id/',
              },
              {
                label: 'Registrasi Akun',
                href: 'https://www.rawat.id/register',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/rawat_indonesia',
              },
              
            ],
          },
          {
            title: 'Lainnya',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.rawat.id/',
              },
              {
                label: 'Catatan Rilis',
                to: '/notes',
              },
              {
                label: 'Catatan Pengembang',
                href: 'https://dev.rawat.id/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Rawat ID`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  
    headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://panduan.rawat.id',
      },
    },
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Panduan Rawat ID - Sistem Informasi Manajemen Rumah Sakit dan Klinik',
        url: 'https://panduan.rawat.id',
        logo: 'https://www.rawat.id/images/logo.svg',
      }),
    },
  ],
};

export default config;
