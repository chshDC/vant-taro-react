import React from "react";
import {Image, View} from "@tarojs/components";
import {addUnit, createNamespace} from '../utils';
import {Badge} from '../badge';

const [name, bem] = createNamespace('icon');

function isImage(name?: string) {
    return name ? name.includes('/') : false;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    dot?: boolean,
    name: string,
    size?: number,
    badge?: number,
    color?: string,
    classPrefix?: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {dot, name, size, badge, color, classPrefix} = props;
    const isImageIcon = isImage(name);

    const icon = () => {
        if (isImageIcon) {
            return <Image className={`${bem('image')}`} src={name} mode="widthFix"/>;
        } else {
            return <View
                className={[classPrefix, isImageIcon ? '' : `${classPrefix}-${name}`, props.className].join(" ")}
                style={{color, fontSize: addUnit(size)}}/>
        }
    }

    const content = () => {
        if (props.badge) {
            return <Badge dot={dot} content={badge}>
                {icon()}
            </Badge>
        } else {
            return icon();
        }
    }


    return content();
}

Icon.displayName = name;

Icon.defaultProps = {
    classPrefix: bem().toString()
}

export {Icon};
export default Icon;
