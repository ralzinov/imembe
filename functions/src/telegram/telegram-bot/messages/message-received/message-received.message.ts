import {ITelegramSendMessageOptions} from '../../../interfaces';

const MESSAGE_TEXT = 'Oo! I will membe this!';

export class MessageReceivedMessage implements ITelegramSendMessageOptions {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
    constructor(public chat_id: string|number) {}
}
