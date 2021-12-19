module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens:{
        
        'sm': '506px',

        

        // => @media (min-width: 640px) { ... }
        'md': '768px',
        'eight':"868px",

        // => @media (min-width: 768px) { ... }
  
        'lg': '1000px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
