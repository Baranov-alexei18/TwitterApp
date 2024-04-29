import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    define: { 'process.env': JSON.stringify(env) },
    plugins: [
      react({
        plugins:
          mode === 'production'
            ? [['@swc/plugin-react-remove-properties', {}]]
            : [['@swc/plugin-styled-components', {}]],
        devTarget: 'es2022',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
