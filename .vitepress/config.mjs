import { defineConfig } from "vitepress";
// import { getSideBar } from "vitepress-plugin-autobar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YangMr的文档网站",
  description: "YangMr的文档网站",
  base: "/docs_website/",
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "项目",
        items: [
          { text: "智慧园区项目", link: "/docs/parks/01.项目前置课.md" },
          {
            text: "智慧园区可视化大屏项目",
            link: "/docs/parks_view/02.项目环境搭建.md",
          },
          { text: "搭建UI组件库", link: "/docs/elm_ui/01.课程介绍.md" },
        ],
      },
      {
        text: "面试题",
        items: [
          { text: "项目难点", link: "/docs/difficulty/index" },
          { text: "面试题话术", link: "/docs/question/index" },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "搭建VitePress站点",
            link: "/docs/vite-press/搭建vitePress站点.md",
          },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: "智慧园区项目",
    //     items: [
    //       { text: "01.项目前置课", link: "/docs/parks/01.项目前置课.md" },
    //       { text: "02.项目初始化", link: "/docs/parks/02.项目初始化.md" },
    //       {
    //         text: "03.登录功能和Token管理",
    //         link: "/docs/parks/03.登录功能和Token管理.md",
    //       },
    //       {
    //         text: "04.行车管理 - 月卡管理（CRUD精讲）",
    //         link: "/docs/parks/04.行车管理 - 月卡管理（CRUD精讲）.md",
    //       },
    //       {
    //         text: "05.园区管理 - 企业管理",
    //         link: "/docs/parks/05.园区管理 - 企业管理.md",
    //       },
    //       {
    //         text: "06.行车管理 - 计费规则管理",
    //         link: "/docs/parks/06.行车管理 - 计费规则管理.md",
    //       },
    //       {
    //         text: "07.系统管理 - 角色管理",
    //         link: "/docs/parks/07.系统管理 - 角色管理.md",
    //       },
    //       {
    //         text: "08.前端权限控制 - 菜单路由权限",
    //         link: "/docs/parks/08.前端权限控制 - 菜单路由权限.md",
    //       },
    //       {
    //         text: "09.前端权限控制 - 按钮权限",
    //         link: "/docs/parks/09.前端权限控制 - 按钮权限.md",
    //       },
    //       {
    //         text: "10.项目业务说明梳理",
    //         link: "/docs/parks/10.项目业务说明梳理.md",
    //       },
    //     ],
    //   },
    //   {
    //     text: "智慧园区可视化大屏项目",
    //     items: [
    //       // { text: "01.Vue3基础", link: "/docs/parks_view/01.Vue3基础.md" },
    //       { text: "01.Vue3基础", link: "/" },
    //       {
    //         text: "02.项目环境搭建",
    //         link: "/docs/parks_view/02.项目环境搭建.md",
    //       },
    //       {
    //         text: "03.2D可视化",
    //         link: "/docs/parks_view/03.2D可视化.md",
    //       },
    //       {
    //         text: "04.3D可视化",
    //         link: "/docs/parks_view/04.3D可视化.md",
    //       },
    //       {
    //         text: "05.大屏适配",
    //         link: "/docs/parks_view/05.大屏适配.md",
    //       },
    //     ],
    //   },
    // ],

    sidebar: {
      "/docs/parks/": [
        {
          text: "智慧园区项目",
          items: [
            { text: "01.项目前置课", link: "/docs/parks/01.项目前置课.md" },
            { text: "02.项目初始化", link: "/docs/parks/02.项目初始化.md" },
            {
              text: "03.登录功能和Token管理",
              link: "/docs/parks/03.登录功能和Token管理.md",
            },
            {
              text: "04.行车管理 - 月卡管理（CRUD精讲）",
              link: "/docs/parks/04.行车管理 - 月卡管理（CRUD精讲）.md",
            },
            {
              text: "05.园区管理 - 企业管理",
              link: "/docs/parks/05.园区管理 - 企业管理.md",
            },
            {
              text: "06.行车管理 - 计费规则管理",
              link: "/docs/parks/06.行车管理 - 计费规则管理.md",
            },
            {
              text: "07.系统管理 - 角色管理",
              link: "/docs/parks/07.系统管理 - 角色管理.md",
            },
            {
              text: "08.前端权限控制 - 菜单路由权限",
              link: "/docs/parks/08.前端权限控制 - 菜单路由权限.md",
            },
            {
              text: "09.前端权限控制 - 按钮权限",
              link: "/docs/parks/09.前端权限控制 - 按钮权限.md",
            },
            {
              text: "10.项目业务说明梳理",
              link: "/docs/parks/10.项目业务说明梳理.md",
            },
          ],
        },
      ],
      "/docs/parks_view/": [
        {
          text: "智慧园区可视化大屏项目",
          items: [
            // { text: "01.Vue3基础", link: "/docs/parks_view/01.Vue3基础.md" },
            { text: "01.Vue3基础", link: "/" },
            {
              text: "02.项目环境搭建",
              link: "/docs/parks_view/02.项目环境搭建.md",
            },
            {
              text: "03.2D可视化",
              link: "/docs/parks_view/03.2D可视化.md",
            },
            {
              text: "04.3D可视化",
              link: "/docs/parks_view/04.3D可视化.md",
            },
            {
              text: "05.大屏适配",
              link: "/docs/parks_view/05.大屏适配.md",
            },
          ],
        },
      ],
      "/docs/elm_ui/": [
        {
          text: "搭建UI组件库",
          items: [
            { text: "01.课程介绍", link: "/docs/elm_ui/01.课程介绍.md" },
            {
              text: "02.封装组件初级篇上",
              link: "/docs/elm_ui/02.封装组件初级篇上.md",
            },
            {
              text: "03.封装组件初级篇下",
              link: "/docs/elm_ui/03.封装组件初级篇下.md",
            },
            {
              text: "04.封装组件中级篇",
              link: "/docs/elm_ui/04.封装组件中级篇.md",
            },
            {
              text: "05.封装组件高级篇上",
              link: "/docs/elm_ui/05.封装组件高级篇上.md",
            },
            {
              text: "06.封装组件高级篇下",
              link: "/docs/elm_ui/06.封装组件高级篇下.md",
            },
            {
              text: "07.封装组件拓展篇",
              link: "/docs/elm_ui/07.封装组件拓展篇.md",
            },
            {
              text: "08.使用vuepress 编写组件文档",
              link: "/docs/elm_ui/08.使用vuepress 编写组件文档.md",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yangmr" }],

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yangmr">Evan You</a>',
    },
  },
});
