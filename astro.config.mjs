import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    mdx(),
    icon()
  ],
  devToolbar: {
    enabled: false,
  },
});


