# 企业后台管理系统

当前版本： 1.0（发布时间：2024）



## 简介

 **Vue3 + elementplus + typescript 项目**

**自行编写**简易的后端接口 node.js + express

后台接口地址：

> https://github.com/yozoramr/express-website



## 设计思路



##### 首先是发现问题：

当页面缩放窗口大小时，一定范围内是响应式的，但是压缩到 echart图表 的时候，页面失去响应式

经测试，刷新可以让图标更新，则判定为 echart图表 未能及时更新问题



##### 解决问题：

router.go(0) 可以刷新页面，当窗口发生变化，页面及时刷新

新问题：用户体验差、性能差



##### 最终方案：

经过查询，可以通过添加监听函数监听窗口大小，使图表及时渲染

当屏幕大小发生变化时候，触发函数（防抖），并将最终的长宽保存到pinia

这样避免多个图标写重复代码，同时只监听pinia的变化，性能得到提升

在echart子组件中，我只需要监视pinia内的宽高是否发生变化，如果发生变化则触发更新，实现echart的响应式



## 一键克隆到本地

```javascript
// 项目本体
git clone https://github.com/yozoramr/Vue3-Backend-Management-Project.git
// 后端接口
git clone https://github.com/yozoramr/express-website.git
```

启动后端接口

```javascript
node .\app.js
```

启动项目(在此之前请启动后端服务)

```cmd
pnpm dev
```



## 技术栈

- **框架选择**：基于 Vue3 + element-UI + echarts
- **框架特色**：Vue全家桶 + vue-cli +  vuex + + pinia + axios
- **授权验证**：基于 JWT
- **内置功能**：通用组件
- **模块化语义化**：项目模块化封装，遵守命名规则



## 后端框架

- **框架选择**：基于 nodejs + express +（mySQL 暂时删除）
- **框架特色**：简易的后端接口，可连接本地数据库，通过简易的 SQL 语句实现增、删、查、改



## 功能实现

| 功能       | 实现         |
| ---------- | ------------ |
| Vue3       | 前端框架     |
| Pinia      | 状态管理框架 |
| 前端UI框架 | Elementplus  |
| 数据可视化 | Echarts      |
| 登录验证   | JWT 认证     |



## 截图示例

首页数据

![首页数据](https://a.yohane.one:2096/f/PNzT6/%E9%A6%96%E9%A1%B5%E6%95%B0%E6%8D%AE.png)

人员管理

![人员管理](https://a.yohane.one:2096/f/xAWi8/%E4%BA%BA%E5%91%98%E7%AE%A1%E7%90%86.png)

退出登录

![退出登录](https://a.yohane.one:2096/f/8npC6/%E9%80%80%E5%87%BA%E7%99%BB%E5%BD%95.png)

登录界面

![登录界面](https://a.yohane.one:2096/f/jAWtq/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png)

工单申请（编辑中）

![工单申请](https://a.yohane.one:2096/f/vbncN/%E5%B7%A5%E5%8D%95%E7%94%B3%E8%AF%B7.png)

