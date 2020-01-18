import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../../interfaces';
import {Command, ICommandHandler} from '../../../entities/command';
import {MessageReceivedMessage} from '../../../messages/message-received';
import {EmptyMessage} from '../../../messages/empty-message';

@Command({
    match: '/membe',
    description: 'Membe stuff'
})
export class AddCommand implements ICommandHandler {
    handle(msg: ITelegramMessage, value?: string): ITelegramSendMessageOptions {
        if (!value) {
            return new EmptyMessage(msg);
        }
        return new MessageReceivedMessage(msg);
    }
}
