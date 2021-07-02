import React, {createContext, FC, ReactElement} from "react";
import {addUnit, createNamespace} from "../utils";
import {BORDER_TOP} from "../utils/constant";
import {View} from "@tarojs/components";
import {ColProps} from "../col";

const [name, bem] = createNamespace('grid');
export const GridContext = createContext<GridProps>({} as GridProps);
export const GRID_KEY = Symbol(name);

export type GridDirection = 'horizontal' | 'vertical';

export interface GridProps {
	square?: boolean
	center?: boolean
	border?: boolean
	gutter?: number | string
	reverse?: boolean
	iconSize?: number
	direction?: GridDirection
	clickable?: boolean
	columnNum?: number
}

const Grid: FC<GridProps> = (props) => {

	return <View
		style={{paddingLeft: addUnit(props.gutter)}}
		className={[bem(), props.border && !props.gutter ? BORDER_TOP : ''].join(" ")}
	>
		{/*// @ts-ignore*/}
		<GridContext.Provider value={props}>
			{props.children}
		</GridContext.Provider>

	</View>
}

Grid.displayName = name;
Grid.defaultProps = {
	center: true,
	border: true,
	columnNum: 4
}

export default Grid
