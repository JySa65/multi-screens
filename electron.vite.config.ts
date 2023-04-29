import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { AliasOptions } from 'vite'

// @ts-ignore no es necesario añadirlo al include
import tsconfig from './tsconfig.web.json'

const getAlias = (): AliasOptions => {
  const paths = tsconfig.compilerOptions.paths as Record<string, string[]>
  const obj = {}
  Object.keys(paths).forEach((alia) => {
    const folderLocation = paths[alia][0].replace('/*', '')
    alia = alia.replace('/*', '')
    obj[alia] = resolve(__dirname, folderLocation)
  })
  return obj
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: getAlias()
    },
    plugins: [react()]
  }
})
