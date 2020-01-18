import {ICommandHandler, ICommandMetadata} from '../../interfaces';

export interface ICommandRegistryEntry {
    name: string;
    handler: ICommandHandler;
    metadata: ICommandMetadata;
}
