import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.kiabi.fr',
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 }
  },
  projects: [
    {
      name: 'fr',
      use: { baseURL: 'https://www.kiabi.fr' }
    },
    {
      name: 'es',
      use: { baseURL: 'https://www.kiabi.es' }
    }
  ]
});
