/**
 * Copyright (c) Serverless Plus.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Serverless Plus',
  tagline: 'Every thing about Serverless Framework Development',
  url: 'https://sls.plus',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Serverless Plus', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'UA-85991013-6',
    },
    navbar: {
      title: 'Serverless Plus',
      logo: {
        alt: 'Serverless Plus Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/serverless-plus/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '中文社区',
              href: 'https://serverlesscloud.cn/',
            },
            {
              label: '知乎专栏',
              href: 'https://zhuanlan.zhihu.com/ServerlessGo',
            },
            {
              label: 'SegmentFault',
              href: 'https://segmentfault.com/t/serverless/questions',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/goserverless',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Awesome',
              to: 'https://github.com/yugasun/awesome-serverless-framework',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/serverless-plus/website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Serverelss Plus, Inc. Built with <a href="https://v2.docusaurus.io/" target="_blank">Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'website',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/serverless-plus/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          sidebarPath: require.resolve('./sidebars.js').blog,
          // Please change this to your repo.
          editUrl: 'https://github.com/serverless-plus/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
