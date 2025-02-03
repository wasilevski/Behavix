// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import "@fontsource/ibm-plex-sans";

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Behavix',
          social: {
              github: 'https://github.com/withastro/starlight',
          },
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
          customCss: [
              // Path to your custom CSS file
              './src/styles/custom.css',
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});