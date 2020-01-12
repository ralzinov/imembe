import {ITelegramMessage, ITelegramSendMessageOptions} from '../interfaces';
import {MessageReceivedMessage} from './messages/message-received';
import {CommandsHandler} from './commands-handler';

export class TelegramBot {
    onMessage(msg: ITelegramMessage): ITelegramSendMessageOptions {
        if(this.isCommand(msg)) {
            return CommandsHandler.handle(msg);
        }
        // save message
        // schedule notification
        return new MessageReceivedMessage(msg.chat.id);
    }

    private isCommand(msg: ITelegramMessage): boolean {
        return Boolean(msg.text?.startsWith('/'));
    }
}
