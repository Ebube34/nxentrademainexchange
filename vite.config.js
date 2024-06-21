import path from "path"
// import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [commonjs()],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})

