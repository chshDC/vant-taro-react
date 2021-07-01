import React, {FC, ReactElement} from "react";
import {createNamespace} from '../utils';
import {ColProps} from "../col";
import {View} from "@tarojs/components";

const [name, bem] = createNamespace('row');
export const ROW_KEY = Symbol(name);

export type RowSpaces = { left?: number; right: number }[];

export type RowAlign = 'top' | 'center' | 'bottom';

export type RowJustify =
	| 'start'
	| 'end'
	| 'center'
	| 'space-around'
	| 'space-between';


export interface RowProps {
	wrap?: boolean
	align?: RowAlign
	justify?: RowJustify
	gutter?: number
	children?: Array<ReactElement<ColProps>>
}

const Row: FC<RowProps> = (props) => {
	let totalSpan = 0;
	const groups: number[][] = [[]];

	if (props.children) {
		for (let i = 0; i < props.children.length; i++) {
			let item = props.children[i];
			totalSpan += item.props.span || 0;
			if (totalSpan > 24) {
				groups.push([i]);
				totalSpan -= 24;
			} else {
				groups[groups.length - 1].push(i);
			}
		}
	}

	const gutter = Number(props.gutter);
	const spaces: RowSpaces = [];
	if (gutter) {
		for (let i = 0; i < groups.length; i++) {
			const group = groups[i];
			const averagePadding = (gutter * (group.length - 1)) / group.length;

			for (let j = 0; j < group.length; j++) {
				const item = group[j];
				if (j === 0) {
					spaces.push({right: averagePadding});
				} else {
					const left = gutter - spaces[item - 1].right;
					const right = averagePadding - left;
					spaces.push({left, right});
				}
			}
		}
	}

	const {wrap, align, justify} = props;
	const classes = bem({[`align-${align}`]: align, [`justify-${justify}`]: justify, nowrap: !wrap});
	return <View className={`${classes}`}>
		{
			props.children?.map((item, index) => {
				return React.cloneElement(item, {
					key: index,
					paddingLeft: spaces[index].left,
					paddingRight: spaces[index].right
				});
			})
		}
		{/*{props.children}*/}
	</View>
}
Row.displayName = name;
Row.defaultProps = {
	wrap: true,
	gutter: 0
};


export {Row};
export default Row;
