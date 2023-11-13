import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import comments from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig((o)=>{
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers:[ElementPlusResolver()]
      }),
      comments({
        resolvers:[ElementPlusResolver()]
      }),
    ],
    apply: 'build',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      }
    },
    build: {
      sourcemap: false,
      minify: 'terser',
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
            const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
            return `js/${fileName}/[name].[hash].js`;
          }
        }
      }
    }
  }})
