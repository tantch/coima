import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace YOUR_REPO_NAME with the name of your GitHub repo
export default defineConfig({
  base: '/coima/', 
  plugins: [react()],
})