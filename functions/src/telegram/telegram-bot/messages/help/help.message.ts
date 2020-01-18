import {BaseMessage} from '../base';
import {MESSAGE_TEXT_TEMPLATE} from './help.message.const';
import {ITelegramMessage} from '../../../interfaces';
import {IHelpMessageCommandDescriptionItem} from './interfaces';

const MULTI_SPACE_CHAR_REGEX = / +/g;

export class HelpMessage extends BaseMessage {
    text: string;
    method = 'sendMessage';
    parse_mode = 'HTML';
    disable_web_page_preview = true;

    constructor(msg: ITelegramMessage, commands: IHelpMessageCommandDescriptionItem[]) {
        super(msg);
        this.text = this.initText(commands);
    }

    private initText(commands: IHelpMessageCommandDescriptionItem[]): string {
        const helpMessageStr = MESSAGE_TEXT_TEMPLATE.replace(MULTI_SPACE_CHAR_REGEX, ' ');
        const commandsListStr = commands.reduce((acc, {name, description}) => {
            return acc + `${name} - ${description}\n`;
        }, '');
        return `${helpMessageStr}\n${commandsListStr}`;
    }
}
