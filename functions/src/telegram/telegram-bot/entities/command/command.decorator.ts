import {CommandsHandler} from '../../commands-handler';
import {ICommandHandler, ICommandMetadata} from './interfaces';

export function Command(parameters: ICommandMetadata) {
    return function (TargetClass: IConstructable<ICommandHandler>) {
        if (!parameters.match.startsWith('/')) {
            throw new Error('Command handler match string must start with "/" symbol');
        }
        CommandsHandler.register(parameters.match.trim(), new TargetClass(), parameters);
    }
}
