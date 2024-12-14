import apiAgentBuilder from '../apiAgentBuilder'

export interface ApiAgentBuilderProps {
  baseUrl: string
  timeout: number
}

export interface ApiAgentProps {
  method: string
  options?: RequestInit
}

export type ApiAgent = <T = {}>(props: ApiAgentProps) => Promise<T>

export type ApiAgentBuilder = (props: ApiAgentBuilderProps) => ApiAgent
