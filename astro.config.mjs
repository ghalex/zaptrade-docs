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
        github: 'https://github.com/ghalex/zaptrade'
        // discord: 'https://astro.build/chat',
      },
      editLink: {
        baseUrl: 'https://github.com/ghalex/zaptrade-docs/edit/main',
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
          // badge: { text: 'v1.0.24', variant: 'tip' },
          link: '/changelog/'
        },
        {
          label: 'Programming Languages',
          items: [
            {
              label: 'ZpLang',
              items: [
                {
                  label: 'Welcome',
                  link: '/languages/zplang/welcome'
                },
                {
                  label: 'Examples',
                  link: '/languages/zplang/examples'
                },
                {
                  label: 'Learn in 5 minutes',
                  link: '/languages/zplang/learn-in5'
                },
                {
                  label: 'Language Reference',
                  items: [
                    {
                      label: 'Core',
                      link: '/languages/zplang/reference/core',
                      // collapsed: true,
                      // autogenerate: { directory: '/languages/zplang/reference/core' },
                    },
                    {
                      label: 'Trading',
                      collapsed: false,
                      autogenerate: { directory: '/languages/zplang/reference/trading' },
                    },
                    {
                      label: 'Indicators',
                      collapsed: false,
                      autogenerate: { directory: '/languages/zplang/reference/indicators' },
                    }
                  ]
                }
              ]
            },
            {
              label: 'JavaScript',
              badge: { text: 'New', variant: 'note' }, // badge: 'New
              items: [
                {
                  label: 'Welcome',
                  link: '/languages/javascript/welcome'
                },
                {
                  label: 'Examples',
                  link: '/languages/javascript/examples'
                }
              ]
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