import {ITelegramMessage, ITelegramSendMessageOptions} from '../../interfaces';
import {ICommandHandler} from '../entities/command/interfaces';
import {UnknownCommandMessage} from '../messages/unknown-command';

export class CommandsHandler {
    private static registry: Dict<ICommandHandler> = {};

    static on(command: string, handler: ICommandHandler): void {
        this.registry[command] = handler;
    }

    static handle(msg: ITelegramMessage): ITelegramSendMessageOptions {
        const {chat, text = ''} = msg;
        const handler = this.registry[text.trim()];
        if (handler) {
            return handler.handle(msg);
        }
        return new UnknownCommandMessage(chat.id);
    }
}
