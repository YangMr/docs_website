# 项目难点

## 一、RBAC 权限

### 1.1 什么是 RBAC 权限?

所谓的 RBAC（Role-Based Access Control，基于⻆⾊的访问控制），其实就是⽤户通过⻆⾊与权限进⾏关
联。简单地说，⼀个⽤户拥有若⼲⻆⾊，每⼀个⻆⾊拥有若⼲权限。这样，就构造成“⽤户-⻆⾊-权限”的授权
模型。在这种模型中，⽤户与⻆⾊之间，⻆⾊与权限之间，⼀般者是多对多的关系

通俗的来讲,所谓的 rbac 权限其实指的是我们可以给⽤户分配⻆⾊,⻆⾊分配权限, 我们就可以做到不同的
⽤户登录看到不同的权限⻚⾯

### 1.2 菜单权限

所谓的菜单权限其实指的是⽤户后台主⻚的菜单栏的数据是动态的,⽽不是写死的,如果要想把菜单栏的数据变成动
态的,我们⼀般是通过两种⽅案来解决:

这块⼤家详细说第⼀种⽅案就⾏,第⼆种⽅案可以稍微提⼀下

1. 第⼀种⽅案

- 实现思路

`  菜单的数据⼀般是当我们登录成功之后,后台会给我们返回 token 以及⽤户相关信息,其中⽤户信息这块会包含菜单的数据、路由的数据、按钮权限的数据. 我们需要将这些数据存储到 vuex 和本地,
  接下来我们需要在主⻚组件中获取到 vuex ⾥⾯所存储到的菜单数据,利⽤ el-menu 将菜单的数据进⾏动态渲染`

- 难点

`但是菜单渲染这块有⼀个难点,后台给我们返回的菜单数据⼀般会是⼀个tree结构的数据,但是我们⽆法预测
这个tree结构的数据有多少层,如何直接使⽤el-menu进⾏渲染的时候就会存在⼀个问题,⽆法将tree结构
的数据完全渲染出来,所以这块我们需要使⽤vue递归组件去实现`

2. 第⼆种⽅案

- 实现思路

  `    菜单的数据不是后端来返回,⽽是前端通过动态路由表来⽣成菜单的数据. 具体实现思路是通过
this.$router.options.routes获取到完整的路由表,然后在封装⼀个递归⽅法,过滤出菜单所需要的数据,最
后在通过el-menu渲染成菜单.`