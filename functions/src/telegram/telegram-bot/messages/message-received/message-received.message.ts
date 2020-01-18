import {BaseMessage} from '../base';

const MESSAGE_TEXT = 'Ok I\'ll <i>membe</i>!';

export class MessageReceivedMessage extends BaseMessage {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
    parse_mode = 'HTML'
}
