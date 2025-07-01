import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "セキュリティ勉強会",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar,
  },
});
