import {ICommandHandler, ICommandMetadata} from './interfaces';
import {CommandRegistry} from './registry';

export function Command(parameters: ICommandMetadata) {
    return function (TargetClass: IConstructable<ICommandHandler>) {
        if (!parameters.match.startsWith('/')) {
            throw new Error('Command handler match string must start with "/" symbol');
        }
        CommandRegistry.register(parameters.match.trim(), new TargetClass(), parameters);
    }
}
