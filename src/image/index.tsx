import React, {CSSProperties, FC, ReactElement, useState} from "react";
import {isDef, addUnit, inBrowser, createNamespace, isReactElement} from '../utils';

// Components
import {Icon} from '../icon';
import {View, Image as TaroImage, ITouchEvent, BaseEventOrig} from "@tarojs/components";
import {ImageProps as TaroJsImageProps} from "@tarojs/components/types/Image";


const [name, bem] = createNamespace('image');

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export interface ImageProps {
	src: string
	alt?: string
	fit?: ImageFit
	round?: boolean
	width?: number | string
	height?: number | string
	radius?: number | string
	lazyLoad?: boolean
	iconSize?: number
	showError?: boolean
	iconPrefix?: string
	showLoading?: boolean
	errorIcon?: string | ReactElement
	loadingIcon?: string | ReactElement
	click?: (e: ITouchEvent) => void
	load?: (event: BaseEventOrig<TaroJsImageProps.onLoadEventDetail>) => void
	error?: (event: BaseEventOrig<TaroJsImageProps.onErrorEventDetail>) => void
}

const Image: FC<ImageProps> = (props) => {
	const [isLoading, changeLoading] = useState(true);
	const [isError, changeError] = useState(false);


	const style: CSSProperties = {};
	if (isDef(props.width)) {
		style.width = addUnit(props.width);
	}
	if (isDef(props.height)) {
		style.height = addUnit(props.height);
	}
	if (isDef(props.radius)) {
		style.overflow = 'hidden';
		style.borderRadius = addUnit(props.radius);
	}

	const onLoad = (event: BaseEventOrig<TaroJsImageProps.onLoadEventDetail>) => {
		changeLoading(false);
		changeError(false);
		props.load?.(event)
	};

	const onError = (event: BaseEventOrig<TaroJsImageProps.onErrorEventDetail>) => {
		changeLoading(false);
		changeError(true);
		props.error?.(event)
	};

	const renderLoadingIcon = () => {
		if (isReactElement(props.loadingIcon)) {
			return props.loadingIcon;
		}

		return (
			<Icon
				size={props.iconSize}
				name={props.loadingIcon as string}
				className={`${bem('loading-icon')}`}
				classPrefix={props.iconPrefix}
			/>
		);
	};

	const renderErrorIcon = () => {
		if (isReactElement(props.errorIcon)) {
			return props.errorIcon;
		}

		return (
			<Icon
				size={props.iconSize}
				name={props.errorIcon as string}
				className={`${bem('error-icon')}`}
				classPrefix={props.iconPrefix}
			/>
		);
	};

	const renderPlaceholder = () => {
		if (isLoading && props.showLoading) {
			return <View className={`${bem('loading')}`}>{renderLoadingIcon()}</View>;
		}
		if (isError && props.showError) {
			return <View className={`${bem('error')}`}>{renderErrorIcon()}</View>;
		}
	};

	const renderImage = () => {
		if (isError || !props.src) {
			return;
		}

		const attrs = {
			alt: props.alt,
			className: `${bem('img')}`,
			style: {
				objectFit: props.fit,
			},
			src: props.src,
			onLoad,
			onError,
			onClick: (e: ITouchEvent) => {
				props.click?.(e);
			}
		};

		if (props.lazyLoad) {
			return <TaroImage lazyLoad={true} {...attrs} />;
		}
		return (
			<TaroImage {...attrs}/>
		);
	};


	return <View className={`${bem({round: props.round})}`} style={style}>
		{renderImage()}
		{renderPlaceholder()}
		{props.children}
	</View>
}


Image.displayName = name;
Image.defaultProps = {
	showError: true,
	showLoading: true,
	errorIcon: "photo-fail",
	loadingIcon: "photo"
}

export {Image}
export default Image;
