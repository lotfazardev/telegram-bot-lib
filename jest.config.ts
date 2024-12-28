import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@constant/(.*)$': '<rootDir>/src/constant/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@entity/(.*)$': '<rootDir>/src/entity/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/jest.setup.ts'],
}

export default config
