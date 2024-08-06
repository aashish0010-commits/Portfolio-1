/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '40%' },
        },
        reverseExpand: {
          '0%': { width: '40%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        expand: 'expand 3s ease-out forwards',
        reverseExpand: 'reverseExpand 3s ease-in forwards',
        // Combine both animations for continuous effect
        continuousExpand: 'expand 3s ease-out infinite alternate',
      },
      colors: {
        customGreen: '#009E66',
        customFacebook: '#0A65FE',
        customTwitter: '#03A9F4',
        customLink: '#007BB6',
      },
    },
  },
  plugins: [],
}
