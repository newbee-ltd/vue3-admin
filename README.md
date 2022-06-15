# vue3-admin

- [知乎：如何看待慕课网涉嫌抄袭开源项目作为《Java工程师》的终极项目并上线销售？](https://www.zhihu.com/question/464292538)
- [《newbee-mall开源项目被慕课网拿去做课程，然后我毫不知情，这又是什么骚操作？》](https://mp.weixin.qq.com/s/xEk-y9HA8RxJWMplpTQ1MQ)
- [《起诉书！慕课网你敢抄袭，我就敢起诉你！》](https://mp.weixin.qq.com/s/oXr6O7u7vqQQi8mzTkoTDg)
- [《花费3680元买了一个慕课网的Java就业班课程，里面竟然有自己写的开源项目！》](https://mp.weixin.qq.com/s/TLZbAEjRi0YT1t8xoFv4dQ)
- [《newbee-mall开源项目被慕课网拿去做课程，讲师已道歉，课程却还在售卖》](https://mp.weixin.qq.com/s/sue5JyZcysFRNFTxUnZiIQ)
- [《可笑！慕课网涉嫌抄袭开源项目至今没有道歉，而且在偷偷的“毁尸灭迹”》](https://mp.weixin.qq.com/s/UTsA5WOFPH4UUf5rEj2HpQ)
- [《最新证据：代码相似度达到90%以上！再谈慕课网涉嫌抄袭事件》](https://mp.weixin.qq.com/s/myejz9icB55wfdHEFNvrBw)
- [《newbee-mall开源项目被慕课网拿去做课程，项目详细对比记录，更多实锤看这里》](https://mp.weixin.qq.com/s/JTt0r_t8qhfUwkhpdUjrTg)
- [《一个被慕课网拿去做Java就业班终极项目的开源商城项目，推荐给大家》](https://mp.weixin.qq.com/s/BKIETwgEPBprWYhQZJDLIA)

Vue 3.0 + Vite 2.0 + Vue-Router 4.0 + Element-Plus + Echarts 5.0 + Axios 后台管理系统。

<img width="600" alt="vue3-admin" src="https://user-images.githubusercontent.com/54432435/112945709-32826f00-9167-11eb-9c23-bbf5a97ec8d4.png">

![Build Status](https://img.shields.io/badge/build-passing-green.svg)
![Version 3.0.0](https://img.shields.io/badge/version-3.0.0-yellow.svg)
[![License](https://img.shields.io/badge/license-GPL3.0-blue.svg)](https://github.com/newbee-ltd/newbee-mall-vue3-app/blob/master/LICENSE)

newbee-mall 项目是一套电商系统，基于 Spring Boot 2.X 和 Vue 以及相关技术栈开发。 前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。 后台管理系统包含数据面板、轮播图管理、商品管理、订单管理、会员管理、分类管理、设置等模块。

**vue3-admin** **版本线上预览地址：**[http://vue3-admin.newbee.ltd](http://vue3-admin.newbee.ltd)，测试账号密码：admin 123456

## newbee-mall （新蜂商城）系列项目概览

![newbee-mall-course-2022](https://github.com/newbee-ltd/newbee-mall-cloud/raw/main/static-files/newbee-mall-course-2022.png)

| 项目名称             | 仓库地址                                                     | 备注                                                         |
| :------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| newbee-mall          | [newbee-mall in GitHub](https://github.com/newbee-ltd/newbee-mall)<br>[newbee-mall in Gitee](https://gitee.com/newbee-ltd/newbee-mall) | 初始版本、Spring Boot、Thymeleaf、MyBatis、MySQL             |
| newbee-mall-plus     | [newbee-mall-plus in GitHub](https://github.com/newbee-ltd/newbee-mall-plus)<br/>[newbee-mall-plus in Gitee](https://gitee.com/newbee-ltd/newbee-mall-plus) | 升级版本、优惠券、秒杀、支付、Spring Boot、Thymeleaf、MyBatis、MySQL、Redis |
| newbee-mall-cloud    | [newbee-mall-cloud in GitHub](https://github.com/newbee-ltd/newbee-mall-cloud)<br/>[newbee-mall-cloud in Gitee](https://gitee.com/newbee-ltd/newbee-mall-cloud) | 微服务版本、分布式事务、Spring Cloud Alibaba、Nacos、Sentinel、OpenFeign、Seata |
| newbee-mall-api      | [newbee-mall-api in GitHub](https://github.com/newbee-ltd/newbee-mall-api)<br/>[newbee-mall-api in Gitee](https://gitee.com/newbee-ltd/newbee-mall-api) | 前后端分离、Spring Boot、MyBatis、Swagger、MySQL             |
| newbee-mall-api-go   | [newbee-mall-api-go in GitHub](https://github.com/newbee-ltd/newbee-mall-api-go)<br/>[newbee-mall-api-go in Gitee](https://gitee.com/newbee-ltd/newbee-mall-api-go) | 前后端分离、Go、Gin、MySQL                                   |
| newbee-mall-vue-app  | [newbee-mall-vue-app in GitHub](https://github.com/newbee-ltd/newbee-mall-vue-app)<br/>[newbee-mall-vue-app in Gitee](https://gitee.com/newbee-ltd/newbee-mall-vue-app) | 前后端分离、Vue 2.x、Vant                                    |
| newbee-mall-vue3-app | [newbee-mall-vue3-app in GitHub](https://github.com/newbee-ltd/newbee-mall-vue3-app)<br/>[newbee-mall-vue3-app in GitHub](https://gitee.com/newbee-ltd/newbee-mall-vue3-app) | 前后端分离、Vue 3.0、Vue-Router 4.0、Vuex 4.0、Vant 3.0      |
| vue3-admin           | [vue3-admin in GitHub](https://github.com/newbee-ltd/vue3-admin)<br/>[vue3-admin in Gitee](https://gitee.com/newbee-ltd/vue3-admin) | 前后端分离、Vue 3.0、Element-Plus、Vue-Router 4.0、Vite      |

**坚持不易，如果觉得项目还不错的话可以给项目一个 Star 吧，也是对我一直更新代码的一种鼓励啦，谢谢各位的支持。**

## 开发及部署文档

申请了 7 折优惠码：**zWVmNW8M**，只有50枚，手慢无。

- [开篇词：通关Vue3.0 企业级项目开发，升职加薪快人一步](https://juejin.cn/book/6933939264455442444)
- [项目须知和课程约定](https://juejin.cn/book/6933939264455442444)
- [大势所趋：“前后端分离”开发模式](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 简介及开发环境搭建](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 组合 API 入口 Setup 浅析](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 之响应式系统 API](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 之生命周期钩子函数、提供注入](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 性能和业务层面上的提升](https://juejin.cn/book/6933939264455442444)
- [Vite 2.0 原理分析及简单插件编写](https://juejin.cn/book/6933939264455442444)
- [Vue-Router 4.x 使用方法及路由原理](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战项目启动篇](https://juejin.cn/book/6933939264455442444)
- [后端 API 开发技术选型之 Spring Boot](https://juejin.cn/book/6933939264455442444)
- [后端基础运行环境和开发工具准备](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 项目搭建及快速上手](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 实践之 Web 功能开发](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 实践之文件上传处理](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 实践之整合 MyBatis 操作数据库](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 实践之整合 Lombok](https://juejin.cn/book/6933939264455442444)
- [Spring Boot 实践之整合 Swagger 生成接口文档](https://juejin.cn/book/6933939264455442444)
- [后端 API 项目启动和运行注意事项](https://juejin.cn/book/6933939264455442444)
- [接口参数处理和统一响应结果](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之用户登录接口开发](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之用户身份认证详解](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之轮播图管理模块接口开发](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之商品分类管理模块接口开发](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之商品管理模块接口开发](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之商品配置管理模块接口开发](https://juejin.cn/book/6933939264455442444)
- [API 接口开发实战之订单管理模块接口开发](https://juejin.cn/book/6933939264455442444)
- [前后端鉴权的四种方式](https://juejin.cn/book/6933939264455442444)
- [Vite 2.0 + Vue 3.0 + Element-plus 搭建管理后台项目](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之管理后台左右栏目布局](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之登录鉴权](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之首页大盘数据](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之首页配置](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之分类管理](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之商品管理](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之订单管理](https://juejin.cn/book/6933939264455442444)
- [Vue 3.0 实战之会员管理、账户修改](https://juejin.cn/book/6933939264455442444)
- [pm2 实现一键部署云端服务器](https://juejin.cn/book/6933939264455442444)
- [常见问题汇总讲解](https://juejin.cn/book/6933939264455442444)

## 联系作者

> 大家有任何问题或者建议都可以在 [issues](https://github.com/newbee-ltd/vue3-admin/issues) 中反馈给我，我会慢慢完善这个项目。

- 我的邮箱：2449207463@qq.com
- QQ技术交流群：707779034 932227898 552142710

关注公众号：**程序员十三**，回复"勾搭"进群交流。

![wx-gzh](https://newbee-mall.oss-cn-beijing.aliyuncs.com/wx-gzh/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%8D%81%E4%B8%89-%E5%85%AC%E4%BC%97%E5%8F%B7.png)

## 软件著作权

>本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！

![](https://newbee-mall.oss-cn-beijing.aliyuncs.com/poster/store/newbee-mall-copyright.png)

## 页面展示

以下为 vue3-admin 系统的部分页面预览图：

![preview](https://user-images.githubusercontent.com/10935614/111867147-251df580-89ad-11eb-924f-6140b70a2cc0.png)

## 感谢

- [Vue 3.0](https://vue3js.cn/docs/zh/)
- [Element-Plus](https://element-plus.gitee.io/#/zh-CN)
- [Vite 2.0](https://cn.vitejs.dev/)
- [Vue-Router](https://next.router.vuejs.org/zh/index.html)
- [Echarts 5.0](https://echarts.apache.org/zh/index.html)
- [Axios](http://www.axios-js.com/)

## 捐助

全部捐赠，将用于后续的开源项目和服务器的开销

| 支付宝 | 微信支付 | QQ钱包 | 
| :------: | :------: |  :------: | 
| <img width="200" height="200"  src="https://s.yezgea02.com/1617009373128/4771617009362_.pic.jpg"> | <img width="200" height="200" src="https://s.yezgea02.com/1617009369561/4761617009362_.pic.jpg"> | <img width="200" height="200" src="https://s.yezgea02.com/1617009376339/4781617009362_.pic.jpg"> | 
