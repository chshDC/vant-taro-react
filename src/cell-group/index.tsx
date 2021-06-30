import React, {FC, ReactElement} from "react";
import {createNamespace} from "../utils";
import {BORDER_TOP_BOTTOM} from "../utils/constant";
import {View} from "@tarojs/components";

const [name, bem] = createNamespace('cell-group');

export interface CellGroupProps {
	title?: string | ReactElement,
	inset?: boolean,
	border?: boolean,
}

const CellGroup: FC<CellGroupProps> = (props) => {
	const renderGroup = () => (
		<View
			className={[
				bem({inset: props.inset}),
				props.border && !props.inset ? BORDER_TOP_BOTTOM : ""
			].join(" ")}
		>
			{props.children}
		</View>
	);

	const renderTitle = () => (
		<View className={`${bem('title', {inset: props.inset})}`}>
			{props.title}
		</View>
	);

	console.log(props.title ? renderTitle() : null);
	return <>
		{props.title ? renderTitle() : null}
		{renderGroup()}
	</>
}

CellGroup.displayName = name;
CellGroup.defaultProps = {
	border: true
}

export {CellGroup};
export default CellGroup;
