/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {}, // <-- WRACAMY DO TEJ WERSJI (bez '@' i '/postcss')
    autoprefixer: {},
  },
}