import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'ZapCLI',
      logo: {
        light: './src/assets/zapcli_logo.svg',
        dark: './src/assets/zapcli_white.svg'
      },
      social: {
        github: 'https://github.com/ghalex/zptrade'
      },
      sidebar: [
        {
          label: 'Welcome',
          link: '/welcome/'
        },
        {
          label: 'Getting Started',
          link: '/getting-started/'
        },
        {
          label: 'Changelog',
          link: '/changelog/'
        },
        {
          label: 'Programming Languages',
          items: [
            {
              label: 'Zplang',
              link: '/languages/zplang/'
            },
            {
              label: 'JavaScript',
              link: '/languages/javascript/'
            }
          ]
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    })
  ]
});