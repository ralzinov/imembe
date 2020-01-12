import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../interfaces';

export abstract class BaseMessage implements ITelegramSendMessageOptions {
    abstract text: string;
    abstract method: string;
    chat_id: string|number;

    constructor(msg: ITelegramMessage) {
        this.chat_id = msg.from?.id || msg.chat.id;
    }
}
