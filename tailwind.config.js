/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
  safelist: [
    'neon-primary',
    'neon-green',
    'neon-purple',
    'neon-blue',
    'neon-yellow',
    'neon-background',
    'neon-stroke',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'lg': '1024px',
      'xl': '1920px',
    },
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
          filter: `drop-shadow(0 0 15px rgba(var(--neon-rgb), 0.3)) drop-shadow(0 0 7px rgba(var(--neon-rgb), 0.5)) drop-shadow(0 0 2px rgba(var(--neon-rgb), 1.0))`,
        },
        ...neonUtilities,
      })
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.glass': {
          'backdrop-filter': 'blur(1px)',
          'filter': 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))',
          'box-shadow': 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.05)',
          'border-width': '3px',
          'border-color': theme('colors.stroke'),
        },
      })
    }),
  ],
}