import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../../interfaces';

export interface ICommandHandler {
    handle({chat}: ITelegramMessage): ITelegramSendMessageOptions;
}
