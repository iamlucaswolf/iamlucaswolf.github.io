import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://iamlucaswolf.github.io',
  integrations: [tailwind()]
});