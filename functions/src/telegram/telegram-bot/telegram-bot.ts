import {ITelegramMessage, ITelegramSendMessageOptions} from '../interfaces';
import {CommandsHandler} from './commands-handler';
import './commands-handler/commands';

export class TelegramBot {
    onMessage(msg: ITelegramMessage): ITelegramSendMessageOptions|undefined {
        if(this.isCommand(msg)) {
            return CommandsHandler.handle(msg);
        }
        // save message
        // schedule notification
        // return new MessageReceivedMessage(msg.chat.id);
        return void 0;
    }

    private isCommand(msg: ITelegramMessage): boolean {
        return Boolean(msg.text?.startsWith('/'));
    }
}
