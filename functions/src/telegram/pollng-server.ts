import * as path from 'path';
import * as dotenv from 'dotenv';
import * as NodeTelegramBotApi from 'node-telegram-bot-api';
import {IAppEnvVariables, ITelegramMessage, ITelegramSendMessageOptions} from './interfaces';
import {TelegramBot} from './telegram-bot';

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
    let response: ITelegramSendMessageOptions|undefined;
    try {
        response = bot.onMessage(<ITelegramMessage>msg);
    } catch(e) {
        console.error(e);
    }

    if (response) {
        app.sendMessage(chatId, response.text, <NodeTelegramBotApi.SendMessageOptions>response)
            .catch((e) => {
                console.error('Failed to send message', e)
            });
    } else {
        console.log('Ignoring non-command message');
    }
});

console.log('Start');
