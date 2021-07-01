// import { PropType, CSSProperties, TeleportProps } from 'vue';
// import { truthProp, unknownProp } from '../utils';

import {CSSProperties} from "react";

export interface popupSharedProps {
	// whether to show popup
	show: boolean
	// z-index
	zIndex: number
	// whether to show overlay
	overlay: boolean
	// transition duration
	duration: number
	// teleport
	// teleport: [String, Object] as PropType<TeleportProps['to']>,
	// prevent body scroll
	lockScroll: boolean
	// whether to lazy render
	lazyRender: boolean
	// overlay custom style
	overlayStyle: CSSProperties,
	// overlay custom class name
	overlayClass: string
	// Initial rendering animation
	transitionAppear: boolean
	// whether to close popup when overlay is clicked
	closeOnClickOverlay: boolean
};

// export type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>;
//
// export const popupSharedPropKeys = Object.keys(
//   popupSharedProps
// ) as PopupSharedPropKeys;
