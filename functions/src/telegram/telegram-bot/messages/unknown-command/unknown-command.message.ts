import {BaseMessage} from '../base';

const MESSAGE_TEXT = `I don't membe this command...`;

export class UnknownCommandMessage extends BaseMessage {
    text = MESSAGE_TEXT;
    method = 'sendMessage';
}
