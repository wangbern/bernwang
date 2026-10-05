import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { responsiveImages } from "./vite/responsive-images";

export default defineConfig({
  base: "/",
  plugins: [responsiveImages(), tailwindcss(), reactRouter()],
  server: {
    watch: {
      ignored: ["**/image-cache/**"],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
