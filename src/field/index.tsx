import React, {FC} from "react";

// Utils
import {
	isDef,
	extend,
	addUnit,
	unknownProp,
	resetScroll,
	formatNumber,
	preventDefault,
	createNamespace,
} from '../utils';
import {
	runSyncRule,
	endComposing,
	mapInputType,
	startComposing,
	getRuleMessage,
	resizeTextarea,
	runRuleValidator,
} from './utils';
import {CellProps} from '../cell';


// Components
import {Icon} from '../icon';
import {Cell} from '../cell';

// Types
import type {
	FieldRule,
	FieldType,
	FieldTextAlign,
	FieldClearTrigger,
	FieldFormatTrigger,
	FieldValidateError,
	FieldAutosizeConfig,
	FieldValidateTrigger,
} from './types';


const [name, bem] = createNamespace('field');


export interface FieldProps {
	formatter: (value: string) => string,
	leftIcon: string,
	rightIcon: string,
	autofocus: boolean,
	clearable: boolean,
	maxlength: number | string,
	inputAlign: FieldTextAlign,
	placeholder: string,
	errorMessage: string,
	error?: boolean
	disabled?: boolean
	readonly?: boolean
	clearIcon?: string
	modelValue: number | string,
	clearTrigger: FieldClearTrigger
	formatTrigger: FieldFormatTrigger
}

const Field: FC<FieldProps> = (props) => {

	const getModelValue = () => String(props.modelValue ?? '');
	const getProp = (key: keyof typeof props) => {
		if (isDef(props[key])) {
			return props[key];
		}
		if (form && isDef(form.props[key])) {
			return form.props[key];
		}
	};

	return <></>
}

Field.displayName = name;
Field.defaultProps = {
	clearIcon: "clear",
	clearTrigger: "focus",
	formatTrigger: "onChange"
};


export {Field};
export default Field;
