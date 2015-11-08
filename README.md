## My React Webpack Project

基于[redux-react-router-async-example](https://github.com/emmenko/redux-react-router-async-example) 改造

之前尝试了若干个demo，这是到目前为止第一个自己相对满意的demo。

### 用到的react相关的主要组件列表

* react
* redux
* redux-thunk
* redux-logger
* redux-devtools
* react-redux
* redux-router
* react-router

### 构建|开发相关：
* webpack
* webpack-dev-middleware
* webpack-hot-middleware
* babel
* eslint
* express

### 说明
1. 源码目录与很多网上给出的不同，网上几乎所有demo都是基于模块类型划分目录，比如reducers,actions,components等。
本demo基于业务模块划分目录，因为随着项目的变大，找模块是一件费力的事情。把同一个业务相关的代码集中放置，有利于查找模块。

2. 本demo还未加入Async支持，下一版本会添加

3. 自动化测试还未支持