import {BaseMessage} from '../base';

const MESSAGE_TEXT = '' +
    'This bot will help you to <i>membe</i>.\n' +
    'I use <a href="https://en.wikipedia.org/wiki/Forgetting_curve">forgetting curve</a> to send you reminders.\n' +
    '<pre>Example:\n' +
    '1st review - in 20 minutes\n' +
    '2nd review - in 1 hour\n' +
    '3rd review - in 1 day\n' +
    'etc...</pre>' +
    'Add @membe prefix before content you want to <i>membe</i>.\n';

export class HelpMessage extends BaseMessage {
    method = 'sendMessage';
    text = MESSAGE_TEXT;
    parse_mode = 'HTML';
    disable_web_page_preview = true;
}
