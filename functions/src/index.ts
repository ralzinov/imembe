import * as functions from 'firebase-functions';
import {telegramFunctionFactory} from './telegram';

export const tmf = functions.https.onRequest(telegramFunctionFactory());
