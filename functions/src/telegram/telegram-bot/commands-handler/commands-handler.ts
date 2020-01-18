import {ITelegramMessage, ITelegramSendMessageOptions} from '../../interfaces';
import {UnknownCommandMessage} from '../messages/unknown-command';
import {CommandRegistry} from '../entities/command/registry';

/**
 * Parses following values:
 * /command@botname value
 * /command@botname
 * /command value
 * /command
 */
const COMMAND_WITH_OPTIONAL_VALUE = {
    REGEX: /^(\/[a-z0-9@]+)(\s+)?(.+)?$/,
    COMMAND_INDEX: 1,
    VALUE_INDEX: 3
};

export class CommandsHandler {
    static handle(msg: ITelegramMessage): ITelegramSendMessageOptions {
        const {text = ''} = msg;
        const {command, value} = this.parseText(text);

        if (command && CommandRegistry.has(command)) {
            const {handler} = CommandRegistry.get(command);
            console.log(`Got "${command}" command with "${value}" value`);
            return handler.handle(msg, value);
        }

        return new UnknownCommandMessage(msg);
    }

    /**
     * Try to parse passed text to command and value
     */
    private static parseText(text: string = ''): { command?: string; value?: string } {
        const parts = text.match(COMMAND_WITH_OPTIONAL_VALUE.REGEX);
        if (!parts) {
            return {};
        }

        const value = parts[COMMAND_WITH_OPTIONAL_VALUE.VALUE_INDEX];
        let command = parts[COMMAND_WITH_OPTIONAL_VALUE.COMMAND_INDEX];
        if (command.includes('@')) {
            command = command.split('@')[0].toLowerCase();
        }
        return {command, value};
    }
}
