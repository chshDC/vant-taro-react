import React, {FC, ReactElement} from "react";

import {createNamespace, isReactElement} from '../utils';
import {t, bem} from './utils';
import {View} from "@tarojs/components";

const [name] = createNamespace('calendar-header');

export interface CalendarHeaderProps {
	title: string | ReactElement,
	subtitle: string,
	showTitle: boolean,
	showSubtitle: boolean,
	firstDayOfWeek: number,
}

const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
	const renderTitle = () => {
		if (props.showTitle) {
			const title = isReactElement(props.title) ? props.title : props.title || t('title');
			return <View className={`${bem('header-title')}`}>{title}</View>;
		}
	};

	const renderSubtitle = () => {
		if (props.showSubtitle) {
			return <View className={`${bem('header-subtitle')}`}>{props.subtitle}</View>;
		}
	};

	const renderWeekDays = () => {
		const {firstDayOfWeek} = props;
		const weekdays = t('weekdays');
		const renderWeekDays = [
			...weekdays.slice(firstDayOfWeek, 7),
			...weekdays.slice(0, firstDayOfWeek),
		];

		return (
			<View className={`${bem('weekdays')}`}>
				{renderWeekDays.map((text) => (
					<View className={`${bem('weekday')}`}>{text}</View>
				))}
			</View>
		);
	};


	return <View className={`${bem('header')}`}>
		{renderTitle()}
		{renderSubtitle()}
		{renderWeekDays()}
	</View>
}

CalendarHeader.displayName
CalendarHeader.defaultProps = {}

export {CalendarHeader};
export default CalendarHeader;
