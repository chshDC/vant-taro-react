# Cell

### Intro

The cell is a single display item in the list.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import '../../components/vant-taro-react/src/index.css';
import {CellGroup, Cell} from '../../components/vant-taro-react/src'
```

## Usage

### Basic Usage

```html
<CellGroup inset>
	<Cell title="Cell title" value="Content" />
	<Cell title="Cell title" value="Content" label="Description" />
</CellGroup>
```

### Inset Grouped

```html
<CellGroup inset>
  <Cell title="Cell title" value="Content" />
  <Cell title="Cell title" value="Content" label="Description" />
</CellGroup>
```

### Size

```html
<CellGroup>
  <Cell title="Cell title" value="Content" size="large" />
  <Cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</CellGroup>
```

### Left Icon

```html
<CellGroup>
  <Cell title="Cell title" icon="location-o" />
</CellGroup>
```

### Value only

```html
<CellGroup>
  <Cell value="Content" />
</CellGroup>
```

### Link

```html
<CellGroup>
  <Cell title="Cell title" isLink />
  <Cell title="Cell title" isLink value="Content" />
  <Cell title="Cell title" isLink arrowDirection="down" value="Content" />
</CellGroup>
```

### Router

```html
<CellGroup>
  <Cell title="Vue Router" isLink to="index" />
</CellGroup>
```

### Group Title

```html
<CellGroup title="Group 1">
  <Cell title="Cell title" value="Content" />
</CellGroup>
<CellGroup title="Group 2">
  <Cell title="Cell title" value="Content" />
</CellGroup>
```

### Vertical Center

```html
<Cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute      | Description                  | Type      | Default |
| -------------- | ---------------------------- | --------- | ------- |
| title          | Group title                  | _string_  | -       |
| inset 		 | Whether to be inset grouped  | _boolean_ | `false` |
| border         | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `null` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| titleStyle | Title style | _string \| Array \| object_ | - |
| titleClass | Title className | _string \| Array \| object_ | - |
| valueClass | Value className | _string \| Array \| object_ | - |
| labelClass | Label className | _string \| Array \| object_ | - |

### Cell Events

| Event | Description                  | Arguments           |
| ----- | ---------------------------- | ------------------- |
| click | Emitted when cell is clicked | _event: MouseEvent_ |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-cell-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-line-height | _24px_ | - |
| --van-cell-vertical-padding | _10px_ | - |
| --van-cell-horizontal-padding | _var(--van-padding-md)_ | - |
| --van-cell-text-color | _var(--van-text-color)_ | - |
| --van-cell-background-color | _var(--van-white)_ | - |
| --van-cell-border-color | _var(--van-border-color)_ | - |
| --van-cell-active-color | _var(--van-active-color)_ | - |
| --van-cell-required-color | _var(--van-danger-color)_ | - |
| --van-cell-label-color | _var(--van-gary-6)_ | - |
| --van-cell-label-font-size | _var(--van-font-size-sm)_ | - |
| --van-cell-label-line-height | _var(--van-line-height-sm)_ | - |
| --van-cell-label-margin-top | _var(--van-padding-base)_ | - |
| --van-cell-value-color | _var(--van-gary-6)_ | - |
| --van-cell-icon-size | _16px_ | - |
| --van-cell-right-icon-color | _var(--van-gary-6)_ | - |
| --van-cell-large-vertical-padding | _var(--van-padding-sm)_ | - |
| --van-cell-large-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-cell-large-label-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-background-color | _var(--van-white)_ | - |
| --van-cell-group-title-color | _var(--van-gary-6)_ | - |
| --van-cell-group-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)_ | - |
| --van-cell-group-title-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-title-line-height | _16px_ | - |
| --van-cell-group-inset-padding | _0 var(--van-padding-md)_ | - |
| --van-cell-group-inset-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-cell-group-inset-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)_ | - |
