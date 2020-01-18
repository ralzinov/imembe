import {ICommandHandler, ICommandMetadata} from '../interfaces';
import {ICommandRegistryEntry} from './interfaces';

export class CommandRegistry {
    private static registry: Dict<ICommandRegistryEntry> = Object.create(null);

    static register(name: string, handler: ICommandHandler, metadata: ICommandMetadata): void {
        this.registry[name] = {name, handler, metadata};
    }

    static get(name: string): ICommandRegistryEntry {
        const item = this.registry[name];
        if (!item) {
            throw new Error(`Not found entry by "${name}" name in command registry`)
        }
        return item;
    }

    static has(name: string): boolean {
        return Boolean(name) && name in this.registry;
    }

    static getMetadata(): Dict<ICommandMetadata> {
        return Object.keys(this.registry)
            .reduce((acc, name) => {
                acc[name] = this.registry[name].metadata;
                return acc;
            }, <Dict<ICommandMetadata>>{});
    }
}
