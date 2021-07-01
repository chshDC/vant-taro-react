import React, {CSSProperties, FC, ReactElement} from "react";
import {createNamespace, isReactElement} from '../utils';
import {bem} from './utils';
import {View} from "@tarojs/components";

const [name] = createNamespace('calendar-day');

export type CalendarDayType =
	| ''
	| 'start'
	| 'start-end'
	| 'middle'
	| 'end'
	| 'selected'
	| 'multiple-middle'
	| 'multiple-selected'
	| 'disabled'
	| 'placeholder';

export type CalendarDayItem = {
	date?: Date
	text?: string | number
	type?: CalendarDayType
	topInfo?: string | ReactElement
	className?: any
	bottomInfo?: string | ReactElement
};

export interface CalendarDayProps {
	color?: string
	index?: number
	rowHeight?: string
	offset: number
	item: CalendarDayItem
	click: (item: CalendarDayItem) => void
}

const CalendarDay: FC<CalendarDayProps> = (props) => {

	const style: CSSProperties = function () {
		const {item, index, color, offset, rowHeight} = props;
		const style: CSSProperties = {
			height: rowHeight,
		};
		if (item.type === 'placeholder') {
			style.width = '100%';
			return style;
		}
		if (index === 0) {
			style.marginLeft = `${(100 * offset) / 7}%`;
		}

		if (color) {
			switch (item.type) {
				case 'end':
				case 'start':
				case 'start-end':
				case 'multiple-middle':
				case 'multiple-selected':
					style.background = color;
					break;
				case 'middle':
					style.color = color;
					break;
			}
		}

		return style;
	}();

	const onClick = () => {
		if (props.item.type !== 'disabled') {
			props.click(props.item);
		}
	};

	const renderTopInfo = () => {
		const {topInfo} = props.item;

		if (topInfo) {
			return (
				<View className={`${bem('top-info')}`}>
					{topInfo}
				</View>
			);
		}
	};

	const renderBottomInfo = () => {
		const {bottomInfo} = props.item;

		if (bottomInfo) {
			return (
				<View className={`${bem('bottom-info')}`}>
					{bottomInfo}
				</View>
			);
		}
	};

	const renderContent = () => {
		const {item, color, rowHeight} = props;
		const {type, text} = item;

		const Nodes = [renderTopInfo(), text, renderBottomInfo()];

		if (type === 'selected') {
			return (
				<View
					className={`${bem('selected-day')}`}
					style={{
						width: rowHeight,
						height: rowHeight,
						background: color,
					}}
				>
					{Nodes}
				</View>
			);
		}
		return Nodes;
	};

	const {type, className} = props.item;

	return <View
		// role="gridcell"
		style={style}
		className={[bem('day', type), className].join(" ")}
		// tabIndex={type === 'disabled' ? undefined : -1}
		onClick={onClick}
	>
		{renderContent()}
	</View>
}

CalendarDay.displayName = name;
CalendarDay.defaultProps = {}

export {CalendarDay};
export default CalendarDay;
