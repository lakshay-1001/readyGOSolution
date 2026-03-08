import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    allowedHosts: [
      "56a7-2401-4900-88d5-8a82-ad0d-e8f4-c005-6ee3.ngrok-free.app"
    ]
  },
})
