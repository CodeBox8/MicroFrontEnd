import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        header: "http://localhost:4174/assets/remoteEntry.js",
        container: "http://localhost:4175/assets/remoteEntry.js",
        footer: "http://localhost:4176/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
