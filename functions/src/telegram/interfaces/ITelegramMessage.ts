import {Message} from 'node-telegram-bot-api';

export type ITelegramMessage = Message & Dict<string>;
