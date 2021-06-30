import React from "react";
import {Image, View} from "@tarojs/components";
import {addUnit, createNamespace} from '../utils';
import {Badge} from '../badge';
import '@vant/icons/src/encode-woff2.less';

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

    const content = () => {
        if (isImageIcon) {
            return <Image className={`${bem('image')}`} src={name} mode="widthFix"/>;
        } else {
            return <View className={[classPrefix, isImageIcon ? '' : `${classPrefix}-${name}`].join(" ")}
                         style={{color, fontSize: addUnit(size)}}/>
        }
    }

    return <Badge dot={dot} content={badge}>
        {content()}
    </Badge>
}

Icon.displayName = name;

Icon.defaultProps = {
    size: 23,
    classPrefix: bem().toString()
}

export {Icon};
export default Icon;