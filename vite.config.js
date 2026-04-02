import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
   base: './',
   root: resolve(__dirname, 'src'),   
   server: {
    host: true,
    port: 3000,
    hot: true,
    open: './index.html',
    middlewareMode: false,
  },
  css: {
    preprocessorOptions: {
        scss: {

        },
      }
  },
    build: {
    outDir: resolve(__dirname, 'dist'), 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        service: resolve(__dirname, 'src/service.html'),
      },
         output: {
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',

          assetFileNames: ({name}) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                return 'assets/images/[name][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
                return 'assets/css/[name][extname]';
            }

            return 'assets/[name][extname]';
          },
      },
    },
  },
});
