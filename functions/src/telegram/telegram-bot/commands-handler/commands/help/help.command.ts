import {HelpMessage, IHelpMessageCommandDescriptionItem} from '../../../messages/help';
import {ITelegramMessage, ITelegramSendMessageOptions} from '../../../../interfaces';
import {Command, ICommandHandler} from '../../../entities/command';
import {CommandRegistry} from '../../../entities/command/registry';

@Command({
    match: '/help',
    description: 'Page with commands and functionality description'
})
export class HelpCommand implements ICommandHandler {
    handle(msg: ITelegramMessage): ITelegramSendMessageOptions {
        const commands = this.getCommandsList();
        return new HelpMessage(msg, commands);
    }

    private getCommandsList(): IHelpMessageCommandDescriptionItem[] {
        const metadata = CommandRegistry.getMetadata();
        return Object.keys(metadata)
            .map((name) => ({
                description: metadata[name].description || 'No description',
                name
            }))
            .sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
    }
}
