import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "セキュリティ勉強会",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        items: [
          { text: "1. 導入", link: "/page/introduction" },
          { text: "2. 歴史", link: "/page/history" },
          { text: "3. OWASP", link: "/page/owasp" },
          { text: "4. 脆弱性", link: "/page/vulnerability" },
          { text: "5. 最後に", link: "/page/closing" },
        ],
      },
    ],
  },
});
