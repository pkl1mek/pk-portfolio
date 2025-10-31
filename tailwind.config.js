/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Funkcja pomocnicza do konwersji kolorów HEX na RGB
function hexToRgb(hex) {
  const sanitizedHex = hex.replace('#', '')
  const r = parseInt(sanitizedHex.substring(0, 2), 16)
  const g = parseInt(sanitizedHex.substring(2, 4), 16)
  const b = parseInt(sanitizedHex.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#353943',
        primary: '#F8F8F8',
        green: '#7FCC5C',
        purple: '#AC5CCC',
        blue: '#5C6FCC',
        yellow: '#CCC85C',
        stroke: '#454953',
      },
      backgroundImage: {
        'main-bg': "url('/background/background.svg')",
        'glass-gradient':
          "radial-gradient(circle at top left, rgba(255, 255, 255, 0.07), transparent 25%), linear-gradient(to bottom, rgba(64, 68, 76, 0.2), rgba(53, 57, 67, 0.2))",
      },
    },
  },
  plugins: [
    // --- Wtyczka do efektu NEONU (pozostaje bez zmian) ---
    plugin(function ({ addUtilities, theme }) {
      const neonUtilities = {}
      const colors = theme('colors')
      for (const colorName in colors) {
        const colorValue = colors[colorName]
        if (typeof colorValue === 'string' && colorValue.startsWith('#')) {
          neonUtilities[`.neon-${colorName}`] = {
            '--neon-rgb': hexToRgb(colorValue),
          }
        }
      }
      addUtilities({
        '.neon': {
          '--neon-rgb': hexToRgb(theme('colors.primary')),
          filter: `drop-shadow(0 0 30px rgba(var(--neon-rgb), 0.4)) drop-shadow(0 0 12px rgba(var(--neon-rgb), 0.7)) drop-shadow(0 0 4px rgba(var(--neon-rgb), 1.0))`,
        },
        ...neonUtilities,
      })
    }),

    // --- NOWA WTYCZKA DLA TWOJEGO KOMPONENTU .glass-card ---
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.glass-card': {
          maxWidth: theme('maxWidth.md'),
          width: '100%',
          padding: theme('padding.8'),
          borderRadius: theme('borderRadius.full'),
          backgroundImage: theme('backgroundImage.glass-gradient'),
          backdropFilter: 'blur(10px)',
          // Łączymy cień zewnętrzny i wewnętrzny
          boxShadow: 'inset 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          // Można też użyć `filter` dla `drop-shadow`, ale `box-shadow` jest bardziej wszechstronny
          borderWidth: '1px',
          borderColor: theme('colors.stroke'),
        },
      })
    }),
  ],
}