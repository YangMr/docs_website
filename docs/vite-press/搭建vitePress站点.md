# 搭建VitePress站点

## 1. 什么是vitepress?

VitePress 是一个[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG)，专为构建快速、以内容为中心的网站而设计。简而言之，VitePress 获取用 [Markdown](https://en.wikipedia.org/wiki/Markdown) 编写的源内容，为其应用主题，并生成可以轻松部署在任何地方的静态 HTML 页面。



## 2.搭建文档站点

### 2.1 安装vitepress

首先新建文件夹，打开cmd窗口

```shell
pnpm add -D vitepress
```

### 2.2 初始化Vitepress

```shell
pnpm vitepress init
```

这是我的配置，简单介绍一下

- 第一个是在当前根目录下创建vitepress项目
- 站点标题和描述。后续可以在配置中改
- 主题，建议选择第二个，个人觉得比较好看
- 是否使用ts，我们个人学习就没必要ts了，主要还是我懒
- 是否添加脚本到package.json，这个还是需要的，启动命令，打包命令这些都得用

![image-20240108190215775](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108190215775.png)

初始化成功后，使用vscode或webstorm打开文件夹，会看到这样一个目录。接下来简单介绍一下每个文件的含义

- .vitepress，最核心的目录，
- theme目录。自定义主题配置，css样式等
- config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
- node_modules。安装的依赖
- api-examples.md和markdown-examples.md。官方给的两个示例
- index.md。主页相关
- package.json和pnpm-lock.yml。包管理工具需要用的

![image-20240108190658316](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108190658316.png)

### 2.3 启动项目

```shell
pnpm run docs:dev
```

打开，看到这个，说明初始化成功

![image-20240108191252240](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108191252240.png)

## 3.自定义配置

### 3.1 美化主页

对于主页，我们自定义的内容有哪些？如下图，8个地方可以自定义。接下来就一一叙述这8个地方怎么自定义的

![image-20240108191730006](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108191730006.png)

忘记了还有个页脚:

9这个是直接配置footer，在`config.mjs defineConfig themeConfig`下面配置就可以了

![image-20240110033147092](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240110033147092.png)

2-6是在index.md文件中自定义的。简单介绍一下对应关系

```
name<==>2` `text<==>3` `tagline<==>4` `actions<==>5` `features<==>6
```

需要说明的是，对于5这两个按钮，是可以跳转的，**link指定路径**，比如/api-example就是在项目根目录下找api-example.md这个文件

![image-20240108192410028](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108192410028.png)

修改后的页面如下：

![image-20240108192848790](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108192848790.png)

1、7、8这三个配置是在config.mjs中配置的

其中，title对应1，nav对应7，socialLinks对应8。description是SEO要用的，我们不用关注

![image-20240108194059919](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108194059919.png)

最后的结果是这样。

![image-20240108194335668](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108194335668.png)

### 3.2 主页扩展

我们可能还想要对页面进行进一步美化，添加一些图标。可以去这个网站找图片https://www.iconfont.cn/

将找到的图片放在根目录下的public目录下。

![image-20240108195132751](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195132751.png)

最后美化的效果如图：

![image-20240108195220278](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195220278.png)

**TODO：**

- logo的配置是在config.mjs添加。（注意是themeConfig不是config）

```shell
logo: "logo.svg", // 配置logo位置，public目录
```

- vitepress原生支持国外的sociallink，如果是国内需要自行复制svg代码。如图：

![image-20240108195501321](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195501321.png)

- 添加搜索栏，config.mjs中的themeConfig（支持国际化需要进一步配置 ）

![image-20240108215134634](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108215134634.png)

### 3.3 美化地址栏icon

我们可能还需要修改浏览器地址栏的左边图标

![image-20240110161809355](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240110161809355.png)

在`config.mjs defineConfig`下面直接配置即可

```shell
head: [["link", { rel: "icon", href: "/logo.svg" }]],
```

❗如果需要配置路径`base`，这个`href`也需要添加base路径作为前缀



### 3.4 设置搜索框

在`config.mjs defineConfig themeConfig`下面直接配置即可

```javascript
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
```

## 4.自定义文档结构与内容

## 5.使用Github Pages部署

### 5.1 部署步骤

Github Pages专门用来托管静态内容，由于不需要服务器且基于git，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择。下面介绍流程

1. 在github上创建仓库，如果没有Github账号，需要先注册一个。

![img](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108205813594.png)

需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon

```js
base: "/docs-demo/"
```

初始化git仓库

```shell
git init
```

添加gitignore文件

```shell
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

添加本地所有文件到git仓库

```
git add .
```

创建第一次提交

```
git commit -m "first commit"
```

添加远程仓库地址到本地

```
git remote add origin https://github.com/AZCodingAccount/Demo.git
```

推送项目到github

```
git push -u origin master
```

选择github actions

![image-20240108210624305](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210624305.png)

设置工作流

![image-20240108210710694](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210710694.png)

重命名并设置deploy脚本

脚本文件：参考的vitepress官方文档：https://vitepress.dev/guide/deploy#github-pages

❗node版本和pnpm版本需要一致

❗对于npm的部署可以参考这个博客[GitHub Action一键部署个人博客 | Ahao (helloahao096.github.io)](https://helloahao096.github.io/helloahao/posts/GitHub Action一键部署个人博客.html)

❗需要注意项目的根目录（.vitepress所在的目录）

```
name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中
```

![image-20240108210850443](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210850443.png)

点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名

踩坑点：为啥下面的没有CSS样式呢？原因是因为没有.nojekyll这个文件，不然一些css会被忽略。添加一下再push就好了

![image-20240108211022770](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108211022770.png)

![image-20240108214941003](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108214941003.png)