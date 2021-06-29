import React, {FC} from "react";
import {View} from "@tarojs/components";
import {addUnit, createNamespace} from '../utils';
// import {Badge} from '../badge';

const [name, bem] = createNamespace('icon');

function isImage(name?: string) {
    return name ? name.includes('/') : false;
}


export interface IconProps {

}

const Icon: FC<IconProps> = (props) => {
    return <View>
        AA
    </View>
}