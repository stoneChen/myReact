## My React Webpack Project

基于[redux-react-router-async-example](https://github.com/emmenko/redux-react-router-async-example) 改造

之前尝试了若干个demo，这是到目前为止第一个自己相对满意的demo。

### 运行
安装node模块依赖：
```
npm install
```
启动 **开启** redux-devtools的开发环境：
```
npm start
```

启动 **关闭** redux-devtools的开发环境：
```
npm run dev
```

启动production环境：
```
npm run prod
```

### 用到的react相关主要组件列表

* react
* react-router
* react-redux
* redux
* redux-thunk
* redux-logger
* redux-devtools
* redux-router
* immutable
* react-bootstrap

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

2. 以支持Async

3. 自动化测试还未支持