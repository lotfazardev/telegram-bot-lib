export type ClassMethods<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}

export type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (
  arg: infer I
) => void
  ? I
  : never
