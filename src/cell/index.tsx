import React, {CSSProperties, FC, ReactElement} from "react";
import {createNamespace, extend, isDef, isReactElement} from '../utils';

// Components
import {Icon, IconProps} from '../icon';
import {ITouchEvent, Text, View} from "@tarojs/components";
import Taro from "@tarojs/taro";

const [name, bem] = createNamespace('cell');

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';
export type CellSize = 'large';


export interface CellProps {
	icon?: string | ReactElement
	size?: CellSize
	title?: string | ReactElement
	value?: string | ReactElement
	label?: string | ReactElement
	center?: boolean
	isLink?: boolean
	border?: boolean
	required?: boolean
	iconPrefix?: string
	valueClass?: string
	labelClass?: string
	titleClass?: string
	titleStyle?: string | CSSProperties
	arrowDirection?: CellArrowDirection
	clickable?: boolean
	rightIcon?: ReactElement
	click?: (event: ITouchEvent) => void
	to?: string
}

const Cell: FC<CellProps> = (props) => {
	const renderLabel = () => {
		const showLabel = isDef(props.label);

		if (showLabel) {
			return (
				<View className={[bem('label'), props.labelClass].join(" ")}>
					{props.label}
					{/*{slots.label ? slots.label() : props.label}*/}
				</View>
			);
		}
	};
	const renderTitle = () => {
		if (props.title || isDef(props.title)) {

			return (
				<View
					className={[bem('title'), props.titleClass].join(" ")}
					style={props.titleStyle}
				>
					{
						props.title
					}
					{/*{slots.title ? slots.title() : <span>{props.title}</span>}*/}
					{renderLabel()}
				</View>
			);
		}
	};

	const renderValue = () => {
		// default slot is deprecated
		// should be removed in next major version
		const slot = props.value || props.children;
		const hasValue = slot || isDef(props.value);

		if (hasValue) {
			const hasTitle = props.title || isDef(props.title);
			return (
				<View className={[bem('value', {alone: !hasTitle}), props.valueClass].join(" ")}>
					{/*{slot ? slot() : <span>{props.value}</span>}*/}
					{slot}
				</View>
			);
		}
	};

	const renderLeftIcon = () => {
		if (isReactElement(props.icon)) {
			return props.icon;
		}

		if (props.icon) {
			return (
				<Icon
					name={props.icon as string}
					className={`${bem('left-icon')}`}
					classPrefix={props.iconPrefix}
				/>
			);
		}
	};

	const renderRightIcon = () => {
		if (props.rightIcon) {
			return props.rightIcon;
		}

		if (props.isLink) {
			const name = props.arrowDirection
				? `arrow-${props.arrowDirection}`
				: 'arrow';
			return <Icon name={name} className={`${bem('right-icon')}`}/>;
		}
	};

	const {size, center, border, isLink, required} = props;
	const clickable = props.clickable ?? isLink;

	const classes: Record<string, boolean | undefined> = {
		center,
		required,
		clickable,
		borderless: !border,
	};
	if (size) {
		classes[size] = !!size;
	}

	const click = (event: ITouchEvent) => {
		if (props.click) {
			props.click(event);
		} else if (props.to) {
			Taro.navigateTo({url: props.to});
		}
	}

	return <View
		className={`${bem(classes)}`}
		// role={clickable ? 'button' : undefined}
		// tabIndex={clickable ? 0 : undefined}
		// onClick={route}
		onClick={click}
	>
		{renderLeftIcon()}
		{renderTitle()}
		{renderValue()}
		{renderRightIcon()}
		{/*{slots.extra?.()}*/}
	</View>
}

Cell.displayName = name;
Cell.defaultProps = {
	border: true
};
export {Cell};
export default Cell;
