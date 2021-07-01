import React, {CSSProperties, FC} from "react";
import {createNamespace} from "../utils";
import {View} from "@tarojs/components";


const [name, bem] = createNamespace('overlay');

export interface OverlayProps {
	show?: boolean,
	zIndex?: number,
	duration?: number,
	className?: string,
	lockScroll?: boolean,
	customStyle?: CSSProperties,
}

const Overlay: FC<OverlayProps> = () => {
	return <View animation={}></View>
}

Overlay.displayName = name;
Overlay.defaultProps = {
	lockScroll: true
}

export {Overlay};
export default Overlay;
