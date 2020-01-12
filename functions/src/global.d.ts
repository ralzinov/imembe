interface IConstructable<T> extends Function {
    new (...args: any[]): T;
}

interface Dict<T> {
    [k: string]: T;
}
