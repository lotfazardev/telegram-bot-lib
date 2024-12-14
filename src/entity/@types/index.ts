import { TelegramMethodsEntities } from '..'
import { ClassMethods, UnionToIntersection } from '@src/@types/utils'

export type TelegramMethodsEntitiesType = typeof TelegramMethodsEntities

export type EntityMethods = {
  [K in keyof TelegramMethodsEntitiesType]: ClassMethods<
    InstanceType<TelegramMethodsEntitiesType[K]>
  >
}

export type TelegramMethods = UnionToIntersection<EntityMethods[keyof EntityMethods]>

export * from '../Available/@types'
export * from '../Passport/@types'
