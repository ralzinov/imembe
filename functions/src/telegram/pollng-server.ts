import * as path from 'path';
import * as dotenv from 'dotenv';
import * as NodeTelegramBotApi from 'node-telegram-bot-api';
import {TelegramBot} from './telegram-bot';
import {IAppEnvVariables, ITelegramMessage} from './interfaces';

const env = dotenv.config({path: path.join(__dirname, '../../../.env')});
if (!env.parsed?.TELEGRAM_TEST_BOT_TOKEN) {
    throw env.error || new Error('Please provide TELEGRAM_TEST_BOT_TOKEN')
}

const {TELEGRAM_TEST_BOT_TOKEN} = <IAppEnvVariables>env.parsed;
const app = new NodeTelegramBotApi(<string>TELEGRAM_TEST_BOT_TOKEN, {polling: true});
const bot = new TelegramBot();

app.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log('Got message:');
    console.log(JSON.stringify(msg, null, 4));
    const response = bot.onMessage(<ITelegramMessage>msg);
    app.sendMessage(chatId, response.text, <NodeTelegramBotApi.SendMessageOptions>response).catch(() => {
        console.error('Failed to send message')
    });
});

console.log('start');
