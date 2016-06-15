# Todo app with React, Redux, written by es6
This is a very simple Todo app example with very limited but core features built with React, Redux. Based on https://github.com/r-park/todo-react-redux/, I removed the firebase part to support Chinese users.

去掉恼人的firebase登录，直接用localstorage存储数据，只保留了最基础和核心的redux业务代码，便于学习

Quick Start
-----------

```shell
$ npm install
$ npm start
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|  build the application to `./target`|
|`npm run dev`|Same as `npm start`|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./target` (must run `npm run build` first)|
