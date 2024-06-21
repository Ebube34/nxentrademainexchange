import path from "path"
// import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import commonjs from '@rollup/plugin-commonjs';
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [commonjs(), vitePluginRequire.default(),],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
 build: {
  commonjsOptions: { transformMixedEsModules: true }
  },
})

