export interface ITelegramSendMessageOptions {
    /* Available methods: https://core.telegram.org/bots/api#available-methods */
    method: string;
    chat_id: string|number;
    text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    reply_markup?: string;
}
