import { defineConfig } from 'vitest/config'
import path from 'node:path'

const srcDir = path.resolve(__dirname, 'src')
const testDir = path.resolve(__dirname, 'test')

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    passWithNoTests: true,
    alias: {
      '@config': path.resolve(srcDir, 'config'),
      '@shared': path.resolve(srcDir, 'shared'),
      '@infra': path.resolve(srcDir, 'infra'),
      '@modules': path.resolve(srcDir, 'modules'),
      '@test': path.resolve(testDir),
    },
  },
})
