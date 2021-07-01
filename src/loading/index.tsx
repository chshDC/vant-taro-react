import React, {CSSProperties, ReactElement} from "react";
import {View, Text} from "@tarojs/components";
import {createNamespace, addUnit, getSizeStyle, extend} from '../utils';


const [name, bem] = createNamespace('loading');

const SpinIcon: ReactElement[] = Array(12);
for (let i = 0; i < SpinIcon.length; i++) {
	SpinIcon[i] = <View className='item' key={i}/>;
}

const a = "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 25 50 50'%3E %3Ccircle cx='50' cy='50' r='20' fill='none'/%3E %3C/svg%3E";
const CircularIcon = (
	<svg viewBox="25 25 50 50" className="van-loading__circular">
		<circle cx="50" cy="50" r="20" fill="none"/>
	</svg>
);

export type LoadingType = 'circular' | 'spinner';

export interface LoadingProps extends React.HTMLAttributes<HTMLElement> {
	size?: number | string,
	color?: string,
	vertical?: boolean,
	textSize?: number | string,
	textColor?: string,
	type?: LoadingType,
}


const Loading: React.FC<LoadingProps> = (props) => {
	const spinnerStyle: CSSProperties = {
		color: props.color,
		...getSizeStyle(props.size)
	};
	const renderText = () => {
		if (props.children) {
			return <>
				<Text className={`${bem('text')}`}
					  style={{
						  fontSize: addUnit(props.textSize),
						  color: props.textColor ?? props.color,
					  }}
				>
					{props.children}
				</Text>
			</>
		}
	};

	const {type, vertical} = props;
	return <>
		<View className={`${bem([type, {vertical}])} ${props.className}`}>
			<View className={`${bem('spinner', type)}`} style={spinnerStyle}>
				{type === 'spinner' ? SpinIcon : CircularIcon}
			</View>
			{renderText()}
		</View>
	</>
}

Loading.displayName = name;
Loading.defaultProps = {
	type: "circular"
}

export {Loading};
export default Loading;
