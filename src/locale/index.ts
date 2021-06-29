// import { ref, reactive } from 'vue';
import {deepAssign} from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

type Message = Record<string, any>;
type Messages = Record<string, Message>;

let lang = 'zh-CN';
let messages: Message = {
    "zh-CN": defaultMessages,
}
// const lang = ref('zh-CN');
// const messages = reactive<Messages>({
//   'zh-CN': defaultMessages,
// });

const Locale = {
    messages(): Message {
        return messages[lang];
    },

    use(newLang: string, newMessages?: Message) {
        lang = newLang;
        this.add({[newLang]: newMessages});
    },

    add(newMessages: Message = {}) {
        deepAssign(messages, newMessages);
    },
};

export default Locale;
export {Locale};
