import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      exposes: {
        "./Container": "./src/Container.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 5002 },
});
