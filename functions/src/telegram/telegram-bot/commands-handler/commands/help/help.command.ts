import {Command, ICommandHandler} from '../../../entities/command';
import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../../interfaces';
import {HelpMessage} from '../../../messages/help';

@Command({
    match: '/help'
})
export class HelpCommand implements ICommandHandler {
    handle(msg: ITelegramMessage): ITelegramSendMessageOptions {
        // construct message text with registered commands
        // add description to commands decorator
        return new HelpMessage(msg);
    }
}
