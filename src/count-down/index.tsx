import React, {forwardRef, ReactElement, useImperativeHandle, useMemo, useState} from "react";
import {View} from "@tarojs/components";
import {useReady, useDidShow, useDidHide} from "@tarojs/taro";
import {createNamespace} from "../utils";
import {parseFormat} from "./utils";

// Composable
import {CurrentTime, useCountDown} from '../../../vant-use/src';


const [name, bem] = createNamespace('count-down');

export interface CountDownProps {
	autoStart?: boolean
	millisecond?: boolean
	time?: number
	format?: string
	change?: (current: CurrentTime) => void
	finish?: () => void
	render?: (current: CurrentTime) => ReactElement
}

export interface CountDownController {
	start: () => void
	pause: () => void
	reset: (totalTime?: number) => void
}

const CountDown = forwardRef<CountDownController | undefined, CountDownProps>((props, ref) => {

	const [current, setCurrent] = useState<CurrentTime>({} as CurrentTime);
	const {start, pause, reset} = useCountDown({
		time: props.time!,
		millisecond: props.millisecond,
		onChange: (currentTime) => {
			setCurrent(currentTime);
			props.change?.(currentTime);
		},
		onFinish: () => {
			props.finish?.()
		}
	});

	if (ref) {
		useImperativeHandle(ref, () => ({
			start,
			pause,
			reset
		}));
	}

	const timeText = useMemo(() => parseFormat(props.format!, current), [current]);

	const resetTime = () => {
		reset(props.time);
		if (props.autoStart) {
			start();
		}
	};

	useReady(resetTime)

	useDidShow(() => start());

	useDidHide(() => pause());

	return <View className={`${bem()}`}>
		{props.render ? props.render(current) : timeText}
	</View>
})

// const InternalCountDown: ForwardRefRenderFunction<CountDownController, CountDownProps> = (props, ref) => {
// 	const {start, pause, reset, current} = useCountDown({
// 		time: props.time!,
// 		millisecond: props.millisecond,
// 		onChange: props.change,
// 		onFinish: props.finish,
// 	});
// 	useImperativeHandle(ref, () => ({
// 		start,
// 		pause,
// 		reset
// 	}));
//
// 	// if (props.ref) {
// 	// 	// props.ref.current.start = start;
// 	// 	props.ref.current = {
// 	// 		start,
// 	// 		pause,
// 	// 		reset
// 	// 	}
// 	// }
//
// 	const timeText = useMemo(() => parseFormat(props.format!, current), [current]);
//
// 	const resetTime = () => {
// 		reset(props.time);
// 		if (props.autoStart) {
// 			start();
// 		}
// 	};
//
// 	useReady(resetTime)
//
// 	return <View className={`${bem()}`}>
// 		{props.render ? props.render(current) : timeText}
// 	</View>
// }
//
// const CountDown = React.forwardRef<CountDownController, CountDownProps>(InternalCountDown) as (props: React.PropsWithChildren<CountDownProps> & { ref?: React.Ref<CountDownController>|{} }) => React.ReactElement;


CountDown.displayName = name;
CountDown.defaultProps = {
	autoStart: true,
	time: 0,
	format: "HH:mm:ss"
}

// export {CountDown}
export default CountDown;
