import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts", // Your library entry point
      name: "ReactSuperToast", // The name of your library
      fileName: (format) => `my-library.${format}.js`, // Output file name
      formats: ["es", "umd"], // Output formats
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Don't bundle these
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
