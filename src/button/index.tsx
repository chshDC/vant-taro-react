import React, {CSSProperties, FC, ReactElement} from "react";
// Utils
import {createNamespace, extend, isReactElement} from '../utils';
import {BORDER_SURROUND} from '../utils/constant';
import {useRoute, routeProps} from '../composables/use-route';

// Components
import {Icon} from '../icon';
import {Loading, LoadingType} from '../loading';
import {View, Button as TaroButton, ITouchEvent} from "@tarojs/components";

const [name, bem] = createNamespace('button');

export type ButtonType =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    text?: string
    icon?: string | ReactElement
    color?: string
    block?: boolean
    plain?: boolean
    round?: boolean
    square?: boolean
    loading?: boolean | ReactElement
    hairline?: boolean
    disabled?: boolean
    iconPrefix?: string
    loadingSize?: string
    loadingText?: string
    loadingType?: LoadingType
    type?: ButtonType
    size?: ButtonSize
    iconPosition?: "left" | "right"
    click?: (event: ITouchEvent) => void
}


const Button: FC<ButtonProps> = (props) => {
    const renderLoadingIcon = () => {
        if (props.loading !== undefined && isReactElement(props.loading)) {
            return props.loading;
        }
        return (
            <Loading
                size={props.loadingSize}
                type={props.loadingType}
                className={`${bem('loading')}`}
            />
        );
    };

    const renderIcon = () => {
        if (props.loading) {
            return renderLoadingIcon();
        }

        if (props.icon !== undefined && isReactElement(props.loading)) {
            return <View className={`${bem('icon')}`}>{props.icon}</View>
        }

        if (props.icon) {
            return (
                <Icon
                    name={props.icon as string}
                    className={`${bem('icon')}`}
                    classPrefix={props.iconPrefix}
                />
            );
        }
    };

    const renderText = () => {
        let text;
        if (props.loading) {
            text = props.loadingText;
        } else {
            text = props.children || props.text;
        }

        if (text) {
            return <View className={`${bem('text')}`}>{text}</View>;
        }
    };

    const getStyle = () => {
        const {color, plain} = props;
        if (color) {
            const style: CSSProperties = {
                color: plain ? color : 'white',
            };

            if (!plain) {
                // Use background instead of backgroundColor to make linear-gradient work
                style.background = color;
            }

            // hide border when color is linear-gradient
            if (color.includes('gradient')) {
                style.border = 0;
            } else {
                style.borderColor = color;
            }

            return style;
        }
    };

    const onClick = (event: ITouchEvent) => {
        if (props.loading) {
            event.preventDefault();
        } else if (!props.disabled && props.click) {
            props.click(event);
            // emit('click', event);
            // route();
        }
    };

    const {type, size, block, round, plain, square, loading, disabled, hairline, iconPosition} = props;

    // console.log("================");
    // console.log({plain, block, round, square, loading, disabled, hairline});
    const classes = [
        bem([type, size, {plain, block, round, square, loading, disabled, hairline}]),
        hairline ? BORDER_SURROUND : ''
    ];

    return <View
        // type={props.type}
        className={`${classes.join(" ")}`}
        style={getStyle()}
        // disabled={disabled}
        onClick={onClick}
    >
        <View className={`${bem('content')}`}>
            {iconPosition === 'left' ? renderIcon() : null}
            {renderText()}
            {iconPosition === 'right' ? renderIcon() : null}
        </View>
    </View>

}
Button.displayName = name;
Button.defaultProps = {
    type: "default",
    iconPosition: "left",
    size: "normal",
}


export {Button}
export default Button;