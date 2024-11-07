import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes: true
  })],
  build: {
    // También podría ser un diccionario o un array de múltiples puntos de entrada
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'luter.component',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  }
})