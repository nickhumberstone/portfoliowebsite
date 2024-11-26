import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E90FF', // Main brand color
          'primary-hover': '#1C86EE', // Darker blue for hover
          secondary: '#FFD700', // Secondary accent color
          'secondary-hover': '#FFC400', // Hover state for secondary color
          bg: '#F9FAFB', // Default background
          'bg-alt': '#FFFFFF', // Alternative background
          'bg-light': '#F3F4F6', // Lighter background for contrast
          'bg-dark': '#1A202C', // Dark mode background
          'bg-gradient': 'linear-gradient(to right, #1E90FF, #FFD700)', // Gradient background

          card: {
            bg: '#FFFFFF', // Card background
            border: '#E5E7EB', // Card border
            shadow: 'rgba(0, 0, 0, 0.1)', // Shadow for cards
            hover: {
              bg: '#F3F4F6', // Hover background for cards
              border: '#D1D5DB', // Hover border for cards
            },
          },

          button: {
            primary: {
              bg: '#1E90FF', // Main call-to-action button background
              text: '#FFFFFF', // Text color for primary button
              hover: '#1C86EE', // Hover background for primary button
            },
            secondary: {
              bg: '#FFD700', // Secondary button background
              text: '#111827', // Text for secondary buttons
              hover: '#FFC400', // Hover background for secondary button
            },
            inverse: {
              bg: '#FFFFFF', // Button background for dark sections
              text: '#1E90FF', // Text for inverse buttons
              hover: '#F3F4F6', // Hover background for inverse buttons
            },
          },

          text: {
            primary: '#111827', // Main text color
            secondary: '#6B7280', // Subtitle or secondary text
            inverse: '#FFFFFF', // Text on dark backgrounds
            muted: '#9CA3AF', // Placeholder or muted text
            accent: '#2563EB', // Accent text for emphasis
          },

          border: {
            default: '#D1D5DB', // Neutral border color
            hover: '#A1A5AB', // Hover border color
          },

          status: {
            success: '#10B981', // Success green
            error: '#EF4444', // Error red
            warning: '#F59E0B', // Warning amber
            info: '#3B82F6', // Informational blue
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '32r': '32rem',
        '40r': '40rem',
        '48r': '48rem',
      },
    },
  },
  plugins: [],
}

export default config;
