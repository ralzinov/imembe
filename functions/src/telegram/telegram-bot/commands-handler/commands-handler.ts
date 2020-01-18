import {ITelegramMessage, ITelegramSendMessageOptions} from '../../interfaces';
import {ICommandHandler, ICommandMetadata} from '../entities/command/interfaces';
import {UnknownCommandMessage} from '../messages/unknown-command';

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

// TODO:refactor - split class to registry & handler
export class CommandsHandler {
    private static registry: Dict<{ name: string; handler: ICommandHandler; metadata: ICommandMetadata }> = {};

    static getMetadata(): Dict<ICommandMetadata> {
        return Object.keys(this.registry)
            .reduce((acc, name) => {
                acc[name] = this.registry[name].metadata;
                return acc;
            }, <Dict<ICommandMetadata>>{});
    }

    static register(name: string, handler: ICommandHandler, metadata: ICommandMetadata): void {
        this.registry[name] = {name, handler, metadata};
    }

    static handle(msg: ITelegramMessage): ITelegramSendMessageOptions {
        const {text = ''} = msg;
        const parsed = this.parseText(text);

        if (parsed?.command) {
            const command = parsed.command.toLowerCase();
            console.log(`Got "${command}" command with "${parsed.value}" value`);

            const registeredItem = this.registry[command];
            if (registeredItem) {
                return registeredItem.handler.handle(msg, parsed.value);
            }
        }

        return new UnknownCommandMessage(msg);
    }

    /**
     * Try to parse passed text to command and value
     */
    private static parseText(text: string = ''): { command: string; value: string } | undefined {
        const parts = text.match(COMMAND_WITH_OPTIONAL_VALUE.REGEX);
        if (!parts) {
            return void 0;
        }

        const value = parts[COMMAND_WITH_OPTIONAL_VALUE.VALUE_INDEX];
        let command = parts[COMMAND_WITH_OPTIONAL_VALUE.COMMAND_INDEX];
        if (command.includes('@')) {
            command = command.split('@')[0];
        }
        return {command, value};
    }
}
