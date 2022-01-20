module.exports = {
  title: '@Dragon',
  description: 'Just playing here',
  base: '/rollup-git-ts-md/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Github', link: 'https://github.com/wenlong201807' },
    ],
    sidebar: {
      '/guide/': [
        '',
      ],
      '/api/': [
          'show-num',
          'day',
      ],
      '/changelog/': ['']
    }
  }
}