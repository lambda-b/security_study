/// <reference types="vite/client" />

import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp: ({ app }) => {
    const components = import.meta.glob("../components/*.vue", { eager: true });

    for (const path in components) {
      const { default: component } = components[path] as { default: unknown };

      const name = path
        .split("/")
        .pop()
        ?.replace(/\.vue$/, "");

      app.component(name, component);
    }
  },
};
