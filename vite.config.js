import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  
   plugins: [
        react(),
        tailwindcss()
        // Add other plugins like React or Vue if you are using them
      ],
  
})
