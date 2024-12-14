import { TelegramApiOptions, TelegramMethods } from './@types'
import { TelegramMethodsEntities } from './entity'

export default class Telegram {
  private _instances: Record<string, any>

  constructor(options: TelegramApiOptions) {
    if (!options.apiKey) {
      throw new Error('API key is required for Telegram initialization.')
    }

    this._instances = Object.keys(TelegramMethodsEntities).reduce(
      (acc, key) => {
        const EntityClass = (TelegramMethodsEntities as any)[key]
        acc[key] = new EntityClass(options)
        return acc
      },
      {} as Record<string, any>
    )

    return new Proxy(this, {
      get: (target, prop: string) => {
        for (const instance of Object.values(this._instances)) {
          if (typeof instance[prop] === 'function') {
            return instance[prop].bind(instance)
          }
        }
        return (target as any)[prop]
      },
    })
  }
}

export default interface Telegram extends TelegramMethods {}
