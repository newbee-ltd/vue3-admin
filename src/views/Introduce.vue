<template>
  <el-card class="account-container">
    <h1>系统简介</h1>
    <div style="line-height: 30px">
      vue3-admin 是一套企业级后台管理系统，基于 Spring Boot 、Vue 3.0 相关技术栈开发，供各位开发者们体验和学习，一定给你最好的学习体验。
    </div>
    <img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616331765416/WechatIMG40038.png" alt="">
    <h1>开发及部署文档</h1>
    <img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616938239101/419241616938196_.pic.jpg" />
    <ul class="course" @click="goJuejin">
      <li>开篇词：通关Vue3.0 企业级项目开发，升职加薪快人一步</li>
      <li>项目须知与课程约定</li>
      <li>大势所趋：“前后端分离”开发模式</li>
      <li>Vue 3.0 简介及开发环境搭建</li>
      <li>Vue 3.0 组合 API 入口 Setup 浅析</li>
      <li>Vue 3.0 之响应式系统 API</li>
      <li>Vue 3.0 之生命周期钩子函数、提供注入</li>
      <li>Vue 3.0 性能和业务层面上的提升</li>
      <li>Vite 2.0 原理分析及简单插件编写</li>
      <li>Vue-Router 4.x 使用方法及路由原理</li>
      <li>Vue 3.0 实战项目启动篇</li>
      <li>技术选型之 Spring Boot</li>
      <li>后端开发环境搭建</li>
      <li>快速搭建一个 Spring Boot 项目</li>
      <li>Spring Boot 实践之 Web 功能开发</li>
      <li>Spring Boot 实践之文件上传处理</li>
      <li>Spring Boot 实践之整合 MyBatis 操作数据库</li>
      <li>Spring Boot 实践之整合 Lombok</li>
      <li>Spring Boot 实践之整合 Swagger 生成接口文档</li>
      <li>后端 API 项目启动和运行注意事项</li>
    </ul>
    <ul class="course" @click="goJuejin">
      <li>接口参数处理和统一响应结果处理</li>
      <li>API 接口开发实战之用户登录接口开发</li>
      <li>API 接口开发实战之用户身份认证详解</li>
      <li>API 接口开发实战之轮播图管理模块接口开发</li>
      <li>API 接口开发实战之商品分类管理模块接口开发</li>
      <li>API 接口开发实战之商品管理模块接口开发</li>
      <li>API 接口开发实战之商品配置管理模块接口开发</li>
      <li>API 接口开发实战之订单管理模块接口开发</li>
      <li>成为一名有独立开发能力的前端工程师</li>
      <li>Vite 2.0 + Vue 3.0 + Element-plus 搭建管理后台项目</li>
      <li>Vue 3.0 实战之管理后台左右栏目布局（Menu 菜单组件）</li>
      <li>Vue 3.0 实战之登录鉴权（Form 表单组件）</li>
      <li>Vue 3.0 实战之首页大盘数据（Echart 5.x）</li>
      <li>Vue 3.0 实战之首页配置 Table</li>
      <li>Vue 3.0 实战之分类管理（多级共用 Table）</li>
      <li>Vue 3.0 实战之商品管理</li>
      <li>Vue 3.0 实战之订单管理（操作多级判断）</li>
      <li>Vue 3.0 实战之会员管理、账户修改</li>
      <li>pm2 实现一键部署云端服务器</li>
      <li>常见问题汇总讲解</li>
    </ul>
    <h1>技术选型</h1>
    <ul style="font-weight: bold;">
      <li>Vue 3.x</li>
      <li>Vite 2.x</li>
      <li>Vue-Router 4.x</li>
      <li>Element-Plus（适配全新 Vue 3.x 的 PC 端组件库）</li>
      <li>Echarts 5.0</li>
      <li>axios</li>
      <li>wangEditor</li>
    </ul>
    <h1>联系作者</h1>
    <ul>
      <li>我的邮箱：2449207463@qq.com</li>
      <li>QQ技术交流群：932227898、707779034</li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: 'Introduce',
  setup() {
    const goJuejin = () => {
      console.log('goJuejin')
      window.open('https://juejin.cn/book/6933939264455442444', 'target')
    }

    return {
      goJuejin
    }
  }
}
</script>
<style scoped>
  .course {
    font-weight: bold;
    display: inline-block;
  }
  .course li {
    line-height: 36px;
    color: #409eff;
    cursor: pointer;
  }
</style>