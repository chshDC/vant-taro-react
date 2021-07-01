# CountDown

### Intro

Used to display the countdown value in real time, and precision supports milliseconds.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for
more registration ways.

```js
import '../../components/vant-taro-react/src/index.css';
import {CountDown} from '../../components/vant-taro-react/src'
```

## Usage

### Basic Usage

```html

<CountDown time={30 * 60 * 60 * 1000}/>
```

### Custom Format

```html
<CountDown time={30 * 60 * 60 * 1000} format="DD Day, HH:mm:ss"/>
```

### Millisecond

```html
<CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SS"/>
```

### Custom Style

```html
<CountDown :time="time" render={(current)=>{
	return <>
		<span class="block">{ current.hours }</span>
		<span class="colon">:</span>
		<span class="block">{ current.minutes }</span>
		<span class="colon">:</span>
		<span class="block">{ current.seconds }</span>
	</>
	}} />
	

<style>
	.colon {
		display: inline-block;
		margin: 0 4px;
		color: #ee0a24;
	}

	.block {
		display: inline-block;
		width: 22px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background-color: #ee0a24;
	}
</style>
```

### Manual Control

```jsx
	let CountDownRef = useRef<CountDownController>();
	return <View>
		{/*<Icon name="plus"/>*/}
		<CountDown ref={CountDownRef} millisecond autoStart={false} time={30 * 60 * 60 * 1000} format="ss:SSS"/>
		<Button onClick={() => {
			CountDownRef.current?.start();
		}}>开始</Button>
		<Button onClick={() => {
			CountDownRef.current?.pause()
		}}>暂停</Button>
		<Button onClick={() => {
			CountDownRef.current?.reset();
		}}>重置</Button>
	</View>
```
## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| time | Total time, unit milliseconds | _number \| string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| autoStart | Whether to auto start count down | _boolean_ | `true` |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |

### Available formats

| Format | Description           |
| ------ | --------------------- |
| DD     | Day                   |
| HH     | Hour                  |
| mm     | Minute                |
| ss     | Second                |
| S      | Millisecond, 1-digit  |
| SS     | Millisecond, 2-digits |
| SSS    | Millisecond, 3-digits |

### Events

| Event  | Description                      | Arguments                  |
| ------ | -------------------------------- | -------------------------- |
| finish | Emitted when count down finished | -                          |
| change | Emitted when count down changed  | _currentTime: CurrentTime_ |

### CurrentTime Structure

| Name         | Description                   | Type     |
| ------------ | ----------------------------- | -------- |
| total        | Total time, unit milliseconds | _number_ |
| days         | Remain days                   | _number_ |
| hours        | Remain hours                  | _number_ |
| minutes      | Remain minutes                | _number_ |
| seconds      | Remain seconds                | _number_ |
| milliseconds | Remain milliseconds           | _number_ |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get CountDown instance and call instance methods.

| Name  | Description      | Attribute | Return value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| pause | Pause count down | -         | -            |
| reset | Reset count down | -         | -            |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/config-provider).

| Name                         | Default Value               | Description |
| ---------------------------- | --------------------------- | ----------- |
| --van-count-down-text-color  | _var(--van-text-color)_     | -           |
| --van-count-down-font-size   | _var(--van-font-size-md)_   | -           |
| --van-count-down-line-height | _var(--van-line-height-md)_ | -           |
