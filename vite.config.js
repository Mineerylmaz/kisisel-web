import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kisisel-web/', // GitHub repo adını tam olarak buraya yaz
})
