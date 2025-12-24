import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/giang-sinh/', // <--- QUAN TRỌNG: Thay đổi tên này trùng với tên repo bạn đặt trên GitHub
})
