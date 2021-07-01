import React, {CSSProperties, FC, useState} from "react";
import {createNamespace, isDef} from "../utils";
import {popupSharedProps} from "./shared";
import {ITouchEvent} from "@tarojs/components";


export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export type PopupCloseIconPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

const [name, bem] = createNamespace('popup');

let globalZIndex = 2000;

export interface PopupProps extends popupSharedProps {
	round?: boolean
	closeable?: boolean
	transition?: string
	iconPrefix?: string
	closeOnPopstate?: boolean
	safeAreaInsetBottom?: boolean
	position?: PopupPosition
	closeIcon?: string
	closeIconPosition?: PopupCloseIconPosition


	click?: () => void
	clickOverlay?: (event: ITouchEvent) => void
	clickCloseIcon: () => void
	open?: () => void
	close?: () => void
	opened?: () => void
	closed?: () => void
}


const Popup: FC<PopupProps> = (props) => {
	const [zIndex, changeZIndex] = useState(0);
	const [opened, changeOpened] = useState(false);

	const style: CSSProperties = {
		zIndex: zIndex
	}
	if (isDef(props.duration)) {
		const key =
			props.position === 'center'
				? 'animationDuration'
				: 'transitionDuration';
		style[key] = `${props.duration}s`;
	}
	const open = () => {
		if (!opened) {
			if (props.zIndex !== undefined) {
				globalZIndex = +props.zIndex;
			}

			changeOpened(true);
			changeZIndex(++globalZIndex);
		}
	};
	const close = () => {
		if (opened) {
			changeOpened(false);
			// emit('update:show', false);
		}
	};

	const onClickOverlay = (event: ITouchEvent) => {
		// emit('click-overlay', event);
		props.clickOverlay?.(event)

		if (props.closeOnClickOverlay) {
			close();
		}
	};

	return <></>
}

Popup.displayName = name;
Popup.defaultProps = {
	position: "center",
	closeIcon: "cross",
	closeIconPosition: "top-right"
}

export {Popup};
export default Popup;
