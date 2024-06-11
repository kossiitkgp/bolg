import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KOSS Bolg',
  tagline: 'The occassional ramblings of our agitated developers, manifested in the form of bolgs.',
  favicon: 'img/favicon.svg',

  url: 'https://bolg.kossiitkgp.org',
  baseUrl: '/',

  organizationName: 'kossiitkgp',
  projectName: 'bolg',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/kossiitkgp/bolg/',
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    image: 'img/open_graph.jpg',
    navbar: {
      title: 'KOSS Bolg',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Homepage',
          href: 'https://kossiitkgp.org'
        },
        {
          label: 'Github',
          href: 'https://github.com/kossiitkgp/'
        },
        {
          label: 'Docs',
          href: 'https://github.com/kossiitkgp/docs'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kossiitkgp/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/kossiitkgp/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kossiitkgp',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/kharagpur-open-source-society/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kossiitkgp/',
            },
            {
              label: 'Website',
              href: 'https://kossiitkgp.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kharagpur Open Source Society. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.dracula
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
