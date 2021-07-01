import React, {FC} from "react";

// Utils
import {
	pick,
	isDate,
	// truthProp,
	getScrollTop,
	// ComponentInstance,
} from '../utils';
import {
	t,
	bem,
	name,
	cloneDate,
	cloneDates,
	getPrevDay,
	getNextDay,
	getToday,
	compareDay,
	calcDateNum,
	compareMonth,
	getDayByOffset,
} from './utils';

export interface CalendarProps {

}

const Calendar: FC<CalendarProps> = (props) => {
	return <></>
}


Calendar.displayName
Calendar.defaultProps = {}

export {Calendar};
export default Calendar;
