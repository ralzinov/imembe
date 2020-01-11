import {ITelegramMessage, ITelegramSendMessageOptions} from './interfaces';

// receive message
// if message starts with / try to parse command
    // run command:
    // start
    // help
    // list - return paginated? list of pending messages
    // next, prev, first, last, go {page number} - pagination actions
    // delete {id}
    // else respond with 'unknown command' error'
// else add message to DB with timestamp

export class TelegramBot {
    onMessage(msg: ITelegramMessage): ITelegramSendMessageOptions {
        return {
            method: 'sendMessage',
            chat_id: msg.chat.id,
            text: `Hello ${msg.from?.first_name || 'stranger'}`
        }
    }
}
