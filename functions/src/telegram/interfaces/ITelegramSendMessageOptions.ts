export interface ITelegramSendMessageOptions {
    method: 'sendMessage'; // ???, TODO find api for this

    chat_id: string|number;
    text: string;
    parse_mode?: string;
    disable_web_page_preview?: string;
    disable_notification?: string;
    reply_to_message_id?: string;
    reply_markup?: string;
}
