export type SendMessageProps = {
  business_connection_id?: string
  chat_id: string | number
  message_thread_id?: number
  text: string
  parse_mode?: 'MarkdownV2' | 'HTML'
}

export type SendMessageResponse = {
  message_id: number
  from: User
  chat: Chat
  date: number
  text: string
}
