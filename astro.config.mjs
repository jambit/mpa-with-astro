// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'fs';

import tailwindcss from '@tailwindcss/vite';

import { createFilter } from '@rollup/pluginutils';

const textFilter = createFilter('**/*.txt');

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            }
        }
    },
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [
            tailwindcss(),
            {
                name: 'importText',
                transform(code, id) {
                    if (textFilter(id)) {
                        const content = fs.readFileSync(id, "utf-8");

                        return {
                            code: `export default ${JSON.stringify(content)};`,
                            map: { mappings: '' },
                        };
                    }
                },
            },
        ],
    },
});
