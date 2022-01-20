# 介绍

@dragon-num 是个人的 JavaScript Utils 包

## 1. 如何使用

**安装:**
```shell
yarn add @dragon-num
```

**三种使用方式:**
```js
// 方式1: import
import { ShowNum } from '@dragon-ts-num'
<ShowNum num={0} />

// 方式2: require
const { ShowNum } = require('@dragon-ts-num')
<ShowNum num={0} />

// 方式3: 在 HTML 文件中使用 script 标签加载，此时会在 window 上挂载，比如
<script src="node_modules/@dragon-ts-num/lib/bundle.browser.js"></script>
<div>
  <ShowNum num={0} />
</div>
```
