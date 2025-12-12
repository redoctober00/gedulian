import {defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin } from 'postcss';

export default  defineConfig({
  // Vite configuration options
  plugins: [react()],
  base: '/gedulian',
});