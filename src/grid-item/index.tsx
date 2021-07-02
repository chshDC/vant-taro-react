import React, {CSSProperties, FC, ReactElement, useContext, useMemo} from "react";

// Utils
import {createNamespace, addUnit, extend, isReactElement} from '../utils';
import {BORDER} from '../utils/constant';

// Components
import {Icon} from '../icon';
import {Badge} from '../badge';
import {GridContext} from "../grid";
import {View, Text} from "@tarojs/components";


const [name, bem] = createNamespace('grid-item');

interface GridItemProps {
	dot?: boolean
	text?: string
	icon?: string | ReactElement
	badge?: number | string
	iconPrefix?: string
	iconColor?: string
}

const GridItem: FC<GridItemProps> = (props) => {

	// const {parent, index} = useParent<GridProvide>(GRID_KEY);
	const gridContext = useContext(GridContext);
	console.log(gridContext)

	const rootStyle = useMemo(() => {
		const {square, gutter, columnNum} = gridContext;
		const percent = `${100 / columnNum!}%`;
		const style: CSSProperties = {
			flexBasis: percent,
		};

		if (square) {
			style.paddingTop = percent;
		} else if (gutter) {
			const gutterValue = addUnit(gutter);
			style.paddingRight = gutterValue;

			// if (index.value >= columnNum!) {
			// 	style.marginTop = gutterValue;
			// }
		}

		return style;
	}, []);

	const contentStyle = useMemo(() => {
		const {square, gutter} = gridContext;

		if (square && gutter) {
			const gutterValue = addUnit(gutter);
			return {
				right: gutterValue,
				bottom: gutterValue,
				height: 'auto',
			};
		}
	}, []);

	const renderIcon = () => {
		if (isReactElement(props.icon)) {
			return (
				<Badge dot={props.dot} content={props.badge}>
					{props.icon}
				</Badge>
			);
		}

		if (props.icon) {
			return (
				<Icon
					dot={props.dot}
					name={props.icon}
					size={gridContext.iconSize}
					badge={props.badge}
					className={`${bem('icon')}`}
					classPrefix={props.iconPrefix}
					color={props.iconColor}
				/>
			);
		}
	};

	const renderText = () => {
		// if (isReactElement(props.text)) {
		// 	return props.text;
		// }
		if (props.text) {
			return <Text className={`${bem('text')}`}>{props.text}</Text>;
		}
	};

	const renderContent = () => {
		if (props.children) {
			return props.children;
		}
		return [renderIcon(), renderText()];
	};

	const {center, border, square, gutter, reverse, direction, clickable} = gridContext;
	const classes = [
		bem('content', [
			direction,
			{center, square, reverse, clickable, surround: border && gutter},
		]),
		border ? BORDER : ''
	];

	return <View className={[bem({square})].join(" ")} style={rootStyle}>
		<View
			// role={clickable ? 'button' : undefined}
			className={classes.join(" ")}
			style={contentStyle}
			// tabIndex={clickable ? 0 : undefined}
			// onClick={route}
		>
			{renderContent()}
		</View>
	</View>
}

GridItem.displayName = name;
GridItem.defaultProps = {}

export {GridItemProps};
export default GridItem;
