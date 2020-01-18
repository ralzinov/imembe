import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../../interfaces';

export interface ICommandHandler {
    handle(msg: ITelegramMessage, value?: string): ITelegramSendMessageOptions;
}
