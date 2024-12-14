export type SendMessagePayload = {
  business_connection_id?: string
  chat_id: string | number
  message_thread_id?: number
  text: string
  parse_mode?: 'MarkdownV2' | 'HTML'
}

export type SendMessageResponse = {
  message_id: number
  date: number
  text: string
}
