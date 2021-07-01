# Image

### Intro

Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import {Image} from '../../components/vant-taro-react/src'
```

## Usage

### Basic Usage

```html
<Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Fit Mode

```html
<Image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`.

```html
<Image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Lazy Load

```html
<Image
  width="100"
  height="100"
  lazyLoad
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```


## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | _string_ | - |
| fit | Fit mode | _string_ | `fill` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| lazyLoad | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| showError | Whether to show error placeholder | _boolean_ | `true` |
| showLoading | Whether to show loading placeholder | _boolean_ | `true` |
| errorIcon | Error icon | _string_ | `photo-fail` |
| loadingIcon | Loading icon | _string_ | `photo` |
| iconSize `v3.0.11` | Icon size | _number \| string_ | `32px` |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |

### fit optional value

| name | desctription |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                    | Arguments           |
| ----- | ------------------------------ | ------------------- |
| click | Emitted when image is clicked  | _event: MouseEvent_ |
| load  | Emitted when image loaded      | _event: BaseEventOrig<onLoadEventDetail>_ |
| error | Emitted when image load failed | _event: BaseEventOrig<onErrorEventDetail>_|

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-image-placeholder-text-color | _var(--van-gary-6)_ | - |
| --van-image-placeholder-font-size | _var(--van-font-size-md)_ | - |
| --van-image-placeholder-background-color | _var(--van-background-color)_ | - |
| --van-image-loading-icon-size | _32px_ | - |
| --van-image-loading-icon-color | _var(--van-gary-4)_ | - |
| --van-image-error-icon-size | _32px_ | - |
| --van-image-error-icon-color | _var(--van-gary-4)_ | - |
