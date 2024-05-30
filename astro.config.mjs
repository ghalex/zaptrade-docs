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
                      collapsed: true,
                      items: []
                    },
                    {
                      label: 'Trading',
                      collapsed: true,
                      items: []
                    },
                    {
                      label: 'Indicators',
                      collapsed: true,
                      items: [
                        {
                          label: 'sma',
                          link: '/languages/zplang/reference/indicators/sma'
                        },
                        {
                          label: 'ema',
                          link: '/languages/zplang/reference/indicators/ema'
                        },
                        {
                          label: 'cmr',
                          link: '/languages/zplang/reference/indicators/cmr'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: 'JavaScript',
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