# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import {Image} from '../../components/vant-taro-react/src'
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```html
<Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```html
<Image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```html
<Image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载

设置 `lazy-load` 属性来开启图片懒加载，需要搭配 [Lazyload](#/zh-CN/lazyload) 组件使用。

```html
<Image
  width="100"
  height="100"
  lazyLoad
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIcon` 使用Icon name或自定义内容。

```html
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" loadingIcon={<Text>加载中。。。</Text>}>
</Image>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `errorIcon` 使用Icon name或自定义内容。

```html
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" errorIcon={<Text>加载失败</Text>}>
<Image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为 `px` | _number \| string_ | - |
| height | 高度，默认单位为 `px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为 `px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazyLoad | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |
| showError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| showLoading | 是否展示图片加载中提示 | _boolean_ | `true` |
| errorIcon | 失败时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo-fail` |
| loadingIcon | 加载时提示的[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photo` |
| iconSize  | 加载图标和失败图标的大小 | _number \| string_ | `32px` |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### 图片填充模式 

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| click  | 点击图片时触发     | _event: MouseEvent_ |
| load   | 图片加载完毕时触发 | _event: BaseEventOrig<onLoadEventDetail>_ |
| error  | 图片加载失败时触发 | _event: BaseEventOrig<onErrorEventDetail>_|

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-image-placeholder-text-color | _var(--van-gary-6)_ | - |
| --van-image-placeholder-font-size | _var(--van-font-size-md)_ | - |
| --van-image-placeholder-background-color | _var(--van-background-color)_ | - |
| --van-image-loading-icon-size | _32px_ | - |
| --van-image-loading-icon-color | _var(--van-gary-4)_ | - |
| --van-image-error-icon-size | _32px_ | - |
| --van-image-error-icon-color | _var(--van-gary-4)_ | - |

## 常见问题

### 如何引用本地图片？

在 .vue 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 `require()`，将图片 URL 转换为 webpack 模块请求，并结合 [file-loader](https://github.com/webpack-contrib/file-loader) 或者 [url-loader](https://github.com/webpack-contrib/url-loader) 进行处理。

```html
<!-- 错误写法 -->
<Image src="./image.png" />

<!-- 正确写法 -->
<Image :src="require('./image.png')" />
```
