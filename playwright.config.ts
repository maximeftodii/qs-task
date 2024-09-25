import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
    timeout: 90000,
    retries: 1,
    use: {
        headless: false,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        }
    ],
});
