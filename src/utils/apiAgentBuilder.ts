import { TelegramResponse } from '@src/@types'
import type { ApiAgentBuilder, ApiAgent, ApiAgentProps } from './@types'

const apiAgentBuilder: ApiAgentBuilder = ({ baseUrl, timeout }) => {
  return (async <T = {}>(props: ApiAgentProps): Promise<T> => {
    const { method, options } = props
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    try {
      const response = await fetch(`${baseUrl}/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`)
      }
      const apiResponse = (await response.json()) as TelegramResponse<T>
      return apiResponse.result
    } catch (error) {
      if (controller.signal.aborted) {
        throw new Error('Request timed out')
      }
      throw error
    } finally {
      clearTimeout(id)
    }
  }) satisfies ApiAgent
}

export default apiAgentBuilder
