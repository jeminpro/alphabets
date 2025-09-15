import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // GitHub Pages for this repo serves at /<repo>/ (project pages).
  // Setting `base` ensures built assets use the correct root path.
  base: '/alphabets/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
