import {CommandsHandler} from '../../commands-handler';
import {ICommandHandler} from './interfaces';

export function Command(parameters: {match: string}) {
    return function (TargetClass: IConstructable<ICommandHandler>) {
        if (!parameters.match.startsWith('/')) {
            throw new Error('Command handler match string must start with "/" symbol');
        }
        CommandsHandler.on(parameters.match.trim(), new TargetClass())
    }
}
