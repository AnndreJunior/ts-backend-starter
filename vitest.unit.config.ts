import { mergeConfig, defineConfig } from 'vitest/config'
import defaultConfig from './vitest.config'

export default mergeConfig(
  defaultConfig,
  defineConfig({
    test: {
      include: ['src/**/*.spec.ts'],
      coverage: {
        provider: 'v8',
        enabled: true,
        include: ['src/modules/**/*.ts'],
        exclude: [
          'eslint.config.mjs',
          'vitest.config.ts',
          'vitest.*.config.ts',
          '**/*.spec.ts',
          'test',
          '**/__tests__/**',
          '**/__test__/**',
          '**/__mocks__/**',
        ],
      },
    },
  }),
)
