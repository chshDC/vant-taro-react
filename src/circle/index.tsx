import React, {CSSProperties, FC} from "react";
import {createNamespace, isObject} from "../utils";

const [name, bem] = createNamespace('circle');

let uid = 0;

function format(rate: string | number) {
	return Math.min(Math.max(+rate, 0), 100);
}

function getPath(clockwise: boolean, viewBoxSize: number) {
	const sweepFlag = clockwise ? 1 : 0;
	return `M ${viewBoxSize / 2} ${
		viewBoxSize / 2
	} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export interface CircleProps {
	text: string,
	size: number | string
	color: string
	clockwise: boolean,
	layerColor: number | string
	currentRate: number,
	speed: number,
	fill: string,
	rate: number,
	strokeWidth: number
}

const Circle: FC<CircleProps> = (props) => {
	const id = `van-circle-${uid++}`;
	const viewBoxSize = function () {
		return props.strokeWidth + 1000
	}();

	const path = getPath(props.clockwise, viewBoxSize);
	return <></>

	// const renderHover = () => {
	// 	const PERIMETER = 3140;
	// 	const { strokeWidth, currentRate, strokeLinecap } = props;
	// 	const offset = (PERIMETER * currentRate) / 100;
	// 	const color = isObject(props.color) ? `url(#${id})` : props.color;
	//
	// 	const style: CSSProperties = {
	// 		stroke: color,
	// 		strokeWidth: `${+strokeWidth + 1}px`,
	// 		strokeLinecap,
	// 		strokeDasharray: `${offset}px ${PERIMETER}px`,
	// 	};
	//
	// 	return (
	// 		<path
	// 			d={path.value}
	// 			style={style}
	// 			class={bem('hover')}
	// 			stroke={color}
	// 		/>
	// 	);
	// };

}


Circle.displayName = name;
Circle.defaultProps = {
	currentRate: 0,
	speed: 0,
	fill: "none",
	rate: 100,
	strokeWidth: 40
}


export {Circle}
export default Circle
