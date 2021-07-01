import React, {CSSProperties, FC} from "react";
import {createNamespace} from "../utils";
import {View} from "@tarojs/components";

const [name, bem] = createNamespace('col');

export interface ColProps {
	offset?: number
	span?: number
	className?: string
	style?: CSSProperties
	paddingLeft?: number
	paddingRight?: number
}

const Col: FC<ColProps> = (props) => {
	const style: CSSProperties = {
		paddingLeft: props.paddingLeft ? `${props.paddingLeft}px` : 0,
		paddingRight: props.paddingRight ? `${props.paddingRight}px` : 0,
		...props.style
	}

	const {span, offset} = props;
	return <View className={`${bem({[span as number]: span, [`offset-${offset}`]: offset})} ${props.className}`}
				 style={style}>
		{props.children}
	</View>
}

Col.displayName = name;
Col.defaultProps = {
	span: 0
}

export {Col};
export default Col;
