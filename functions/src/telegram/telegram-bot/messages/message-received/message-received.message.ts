import {BaseMessage} from '../base';

const MESSAGE_TEXT = 'Oo! I\'ll membe!';

export class MessageReceivedMessage extends BaseMessage {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
}
