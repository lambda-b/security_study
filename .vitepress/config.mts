import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Security Study",
  description: "Security Study",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    sidebar: [
      {
        items: [
          { text: '1. 導入', link: '/page/introduction'},
          { text: '2. 歴史', link: '/page/history' }
        ]
      }
    ],
  }
})
