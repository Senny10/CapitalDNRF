module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
