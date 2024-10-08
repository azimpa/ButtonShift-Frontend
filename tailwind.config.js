/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Include your root index.html file
    "./src/**/*.{js,ts,jsx,tsx}",   // Include all files in the src folder that use Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],   // Adding the Inter font family
      },
      colors: {
        primary: '#0044CC',             // Primary color (dark blue)
        secondary: '#6C757D',           // Secondary color (charcoal gray)
        accent: '#0056D2',              // Accent color (vibrant blue)
        background: '#F4F6F9',          // Background color (light grayish blue)
      }
    },
  },
  plugins: [],   // Add any Tailwind CSS plugins if needed
};
