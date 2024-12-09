import { entities } from './entities/index'
import { ITelegramAPIOptions } from './core/base-telegram-api'

type ClassMethods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}

type EntityMethods = {
  [K in keyof typeof entities]: ClassMethods<InstanceType<(typeof entities)[K]>>
}

type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (
  arg: infer I
) => void
  ? I
  : never

type TelegramMethods = UnionToIntersection<EntityMethods[keyof EntityMethods]>

export class Telegram {
  private _instances: Record<string, any>

  constructor(options: ITelegramAPIOptions) {
    if (!options.apiKey) {
      throw new Error('API key is required for Telegram initialization.')
    }

    this._instances = Object.keys(entities).reduce(
      (acc, key) => {
        const EntityClass = (entities as any)[key]
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

export interface Telegram extends TelegramMethods {}
