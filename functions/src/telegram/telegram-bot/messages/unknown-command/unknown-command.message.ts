import {ITelegramSendMessageOptions} from '../../../interfaces';

const MESSAGE_TEXT = `Unknown command`;

export class UnknownCommandMessage implements ITelegramSendMessageOptions {
    text = MESSAGE_TEXT;
    method = 'sendMessage';
    constructor(public chat_id: string|number) {}
}
