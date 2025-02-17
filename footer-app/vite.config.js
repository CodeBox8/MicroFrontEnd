import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/Footer.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 5003 },
});
