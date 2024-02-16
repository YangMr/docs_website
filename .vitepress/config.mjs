import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YangMr的文档网站",
  description: "YangMr的文档网站",
  base: "/docs_website/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    // logo: "logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "项目",
        items: [
          { text: "智慧园区项目", link: "/markdown-examples" },
          { text: "智慧园区可视化大屏项目", link: "/api-examples" },
          { text: "搭建UI组件库", link: "/api-examples" },
        ],
      },
      {
        text: "面试题",
        items: [
          { text: "项目难点", link: "/markdown-examples" },
          { text: "面试题话术", link: "/api-examples" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/yangmr" }],

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yangmr">Evan You</a>',
    },
  },
});
