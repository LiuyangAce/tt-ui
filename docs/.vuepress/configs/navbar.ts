// navbar.ts
export default [
  { text: '指南', link: '/guide/intro.md' },
  { text: '组件', link: '/components/title.md' },
  { text: 'API 参考', link: '/api/' },
  {
    text: '更新日志',
    children: [
      {
        text: 'gitee',
        link: 'https://gitee.com/LiuyangAce/tt-ui'
      },
      {
        text: 'github',
        link: 'https://github.com/LiuyangAce/tt-ui'
      }
    ]
  },
]