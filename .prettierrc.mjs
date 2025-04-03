import config from '@lusito/prettier-config';

// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    ...config,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        ...config.overrides,
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
