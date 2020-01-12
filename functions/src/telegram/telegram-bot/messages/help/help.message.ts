import {ITelegramSendMessageOptions} from '../../../interfaces';

const MESSAGE_TEXT = 'Help message';

export class HelpMessage implements ITelegramSendMessageOptions {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
    constructor(public chat_id: number|string){}
}
