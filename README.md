# island-webpack-plugin [![Build Status](https://www.travis-ci.org/zhw2590582/island-webpack-plugin.svg?branch=master)](https://www.travis-ci.org/zhw2590582/island-webpack-plugin)
> A island plugin for webpack(目前测试用于文件头部输出作者信息)

## Install

```
$ npm i --save-dev island-webpack-plugin
```

## Usage

```js
// Add island-webpack-plugin in webpack.config.js
const IslandWebpackPlugin = require('island-webpack-plugin');

plugins: [new IslandWebpackPlugin({
    author: 'Harvey Zack',
    email: '717995589@qq.com',
    homepage: 'http://www.zhw-island.com'
})]
```

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)