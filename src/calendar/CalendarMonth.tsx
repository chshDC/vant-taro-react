import React, {createRef, FC, forwardRef, useState} from "react";

// Utils
import {addUnit, setScrollTop, createNamespace, pick} from '../utils';
import {getMonthEndDay} from '../datetime-picker/utils';
import {
	t,
	bem,
	compareDay,
	getPrevDay,
	getNextDay,
	formatMonthTitle,
} from './utils';

// Components
import CalendarDay, {CalendarDayItem, CalendarDayType} from './CalendarDay';
import {View} from "@tarojs/components";

const [name] = createNamespace('calendar-month');

export type CalendarType = 'single' | 'range' | 'multiple';


export interface CalendarMonthProps {
	type: CalendarType
	color: string
	showMark: boolean
	rowHeight: number | string
	formatter: (item: CalendarDayItem) => CalendarDayItem
	lazyRender: boolean
	currentDate: [Date | Date[]]
	allowSameDay: boolean
	showSubtitle: boolean
	showMonthTitle: boolean
	firstDayOfWeek: number
	date: Date
	minDate: Date
	maxDate: Date
	click: (item: CalendarDayItem) => void
	updateHeight: () => void
}

const CalendarMonth: FC<CalendarMonthProps> = (props) => {
	const [visible, setVisible] = useState(false);
	const daysRef = createRef(), monthRef = createRef();

	const title = function () {
		return formatMonthTitle(props.date);
	}();

	const rowHeight = function () {
		return addUnit(props.rowHeight);
	}();

	const offset = function () {
		const realDay = props.date.getDay();

		if (props.firstDayOfWeek) {
			return (realDay + 7 - props.firstDayOfWeek) % 7;
		}
		return realDay;
	}();

	const totalDay = function () {
		return getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1)
	}()

	const shouldRender = visible || !props.lazyRender;

	const getTitle = () => title.value;

	const scrollIntoView = (body: Element) => {
		const el = props.showSubtitle ? daysRef.current : monthRef.current;

		// @ts-ignore
		const scrollTop = el!.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;

		setScrollTop(body, scrollTop);
	};

	const getMultipleDayType = (day: Date) => {
		const isSelected = (date: Date) =>
			(props.currentDate as Date[]).some(
				(item) => compareDay(item, date) === 0
			);

		if (isSelected(day)) {
			const prevDay = getPrevDay(day);
			const nextDay = getNextDay(day);
			const prevSelected = isSelected(prevDay);
			const nextSelected = isSelected(nextDay);

			if (prevSelected && nextSelected) {
				return 'multiple-middle';
			}
			if (prevSelected) {
				return 'end';
			}
			if (nextSelected) {
				return 'start';
			}
			return 'multiple-selected';
		}

		return '';
	};

	const getRangeDayType = (day: Date) => {
		const [startDay, endDay] = props.currentDate as Date[];

		if (!startDay) {
			return '';
		}

		const compareToStart = compareDay(day, startDay);

		if (!endDay) {
			return compareToStart === 0 ? 'start' : '';
		}

		const compareToEnd = compareDay(day, endDay);

		if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
			return 'start-end';
		}
		if (compareToStart === 0) {
			return 'start';
		}
		if (compareToEnd === 0) {
			return 'end';
		}
		if (compareToStart > 0 && compareToEnd < 0) {
			return 'middle';
		}

		return '';
	};

	const getDayType = (day: Date): CalendarDayType => {
		const {type, minDate, maxDate, currentDate} = props;

		if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
			return 'disabled';
		}

		if (currentDate === null) {
			return '';
		}

		if (Array.isArray(currentDate)) {
			if (type === 'multiple') {
				return getMultipleDayType(day);
			}
			if (type === 'range') {
				return getRangeDayType(day);
			}
		} else if (type === 'single') {
			return compareDay(day, currentDate as Date) === 0 ? 'selected' : '';
		}

		return '';
	};

	const getBottomInfo = (dayType: CalendarDayType) => {
		if (props.type === 'range') {
			if (dayType === 'start' || dayType === 'end') {
				return t(dayType);
			}
			if (dayType === 'start-end') {
				return t('startEnd');
			}
		}
	};

	const renderTitle = () => {
		if (props.showMonthTitle) {
			return <View className={`${bem('month-title')}`}>{title.value}</View>;
		}
	};

	const renderMark = () => {
		if (props.showMark && shouldRender) {
			return <View className={`${bem('month-mark')}`}>{props.date.getMonth() + 1}</View>;
		}
	};

	const placeholders = function () {
		const count = Math.ceil((totalDay + offset) / 7);
		return Array(count).fill({type: 'placeholder'});
	}();

	const days = function () {
		const days: CalendarDayItem[] = [];
		const year = props.date.getFullYear();
		const month = props.date.getMonth();

		for (let day = 1; day <= totalDay; day++) {
			const date = new Date(year, month, day);
			const type = getDayType(date);

			let config: CalendarDayItem = {
				date,
				type,
				text: day,
				bottomInfo: getBottomInfo(type),
			};

			if (props.formatter) {
				config = props.formatter(config);
			}

			days.push(config);
		}

		return days;
	}();

	const renderDay = (item: CalendarDayItem, index: number) => (
		<CalendarDay
			// v-slots={pick(slots, ['top-info', 'bottom-info'])}
			item={item}
			index={index}
			color={props.color}
			offset={offset}
			rowHeight={rowHeight}
			click={(item) => props.click(item)}
		/>
	);

	const RenderDays = forwardRef((props, ref) => (
		<View ref={ref} className={`${bem('days')}`} {...props}>
			{renderMark()}
			{(shouldRender ? days : placeholders).map(renderDay)}
		</View>
	))

	const RenderMonth = forwardRef((props, ref) => (
		<View ref={ref} className={`${bem('month')}`} {...props}>
			{renderTitle()}
			<RenderDays ref={daysRef}/>
			{/*{renderDays()}*/}
		</View>
	));

	return <RenderMonth ref={monthRef}/>
}


CalendarMonth.displayName
CalendarMonth.defaultProps = {}

export {CalendarMonth};
export default CalendarMonth;
