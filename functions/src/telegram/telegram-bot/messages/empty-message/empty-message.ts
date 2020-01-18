import {BaseMessage} from '../base';

const MESSAGE_TEXT = 'Nothing to <i>membe</i>!';

export class EmptyMessage extends BaseMessage {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
    parse_mode = 'HTML'
}
