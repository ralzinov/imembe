import * as cors from 'cors';
import * as express from 'express';
import {TelegramBot} from './telegram-bot';

const isTelegramMessage = (req: express.Request): boolean => {
    return req.body?.message?.chat && req.body.message.from;
};

export const telegramFunctionFactory = (): express.Express => {
    const bot = new TelegramBot();
    const app = express();
    app.use(cors({origin: true}));

    app.post('/', async (req, res) => {
        if (req.body) {
            console.log(JSON.stringify(req.body, null, 4));
        }
        if (isTelegramMessage(req)) {
            return res.status(200).send(
                bot.onMessage(req.body.message)
            );
        }
        console.log('Ignoring unknown message');
        return Promise.resolve(null);
    });
    return app;
};
