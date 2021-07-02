import React, {CSSProperties, FC, ReactElement} from "react";
import {View} from "@tarojs/components";
import {isDef, addUnit, isNumeric, createNamespace} from '../utils';

const [name, bem] = createNamespace('badge');


export interface BadgeProps {
	dot?: boolean,
	max?: number,
	color?: string,
	offset?: [number, number],
	content?: number | string
	showZero?: boolean,
	extra?: ReactElement
}

const Badge: FC<BadgeProps> = (props) => {

	const hasContent = () => {
		if (props.extra) {
			return true;
		}
		const {content, showZero} = props;
		return isDef(content) && (showZero || content !== 0);
	};

	const renderContent = () => {
		const {dot, max, content} = props;

		if (!dot && hasContent()) {
			if (props.extra) {
				return props.extra;
			}
			if (isDef(max) && (content as number) > max) {
				return `${max}+`;
			}
			return content;
		}
	};

	const renderBadge = () => {
		if (hasContent() || props.dot) {
			const style: CSSProperties = {
				background: props.color,
			};

			if (props.offset) {
				const [x, y] = props.offset;
				if (props.children) {
					style.top = addUnit(y);
					style.right = `-${addUnit(x)}`;
				} else {
					style.marginTop = addUnit(y);
					style.marginLeft = addUnit(x);
				}
			}
			return (
				<View className={`${bem({dot: props.dot, fixed: !!props.children})}`}
					  style={style}
				>
					{renderContent()}
				</View>
			);
		}
	};

	return <>
		<View className={`${bem('wrapper')}`}>
			{props.children}
			{renderBadge()}
		</View>
	</>
}

Badge.displayName = name;
Badge.defaultProps = {
	max: 99,
	showZero: true,
}

export {Badge};
export default Badge;
