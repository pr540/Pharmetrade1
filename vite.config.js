
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import babel from 'vite-plugin-babel'
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//   plugins: [react(), babel()],
//   server: {
//     port: process.env.PORT || 5173,
//   },
//   build: {
//     target: 'esnext',
//   }
// });

