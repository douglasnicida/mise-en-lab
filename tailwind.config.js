/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          sage:  { 50:'#f4f7f2',100:'#e4ede0',200:'#c9dcc3',300:'#a1c198',400:'#74a069',500:'#4f8244',600:'#3c6834',700:'#305229',800:'#284322',900:'#21371c' },
          earth: { 50:'#faf7f2',100:'#f0e8d8',200:'#e1d0b0',300:'#cfb282',400:'#bd9057',500:'#a97234',600:'#8c5a27',700:'#6f441e',800:'#5a3616',900:'#4a2c14' },
          clay:  { 50:'#fdf5f0',100:'#fce8db',200:'#f9cfb6',300:'#f4ae87',400:'#ed8452',500:'#e5622a',600:'#c94d1e',700:'#a73c18',800:'#883116',900:'#702915' },
          linen: { 50:'#fdfcf8',100:'#f7f3eb',200:'#ede5d4',300:'#dfd4bb',400:'#cbbfa1',500:'#b5a67e' },
          bark:  { 700:'#2e2519',800:'#1e1810',900:'#120f08' },
        },
        fontFamily: {
          display: ['"Playfair Display"','serif'],
          body:    ['"DM Sans"','sans-serif'],
          accent:  ['"DM Mono"','monospace'],
        },
      },
    },
    plugins: [],
  }