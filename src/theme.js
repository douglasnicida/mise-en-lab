/**
 * TEMA VISUAL - Nutrição Unicamp Limeira
 *
 * Paleta inspirada em elementos naturais e alimentos:
 * Verdes, terrosos e tons quentes que remetem à natureza,
 * com contrastes modernos para leitura acadêmica.
 *
 * Para alterar a identidade visual, modifique os valores aqui.
 * Eles são usados tanto no tailwind.config.js quanto como referência CSS.
 */

export const theme = {
    colors: {
      // --- PRIMÁRIAS ---
      sage: {
        50:  '#f4f7f2',
        100: '#e4ede0',
        200: '#c9dcc3',
        300: '#a1c198',
        400: '#74a069',
        500: '#4f8244',  // Verde sálvia principal
        600: '#3c6834',
        700: '#305229',
        800: '#284322',
        900: '#21371c',
      },
  
      // --- TERROSOS ---
      earth: {
        50:  '#faf7f2',
        100: '#f0e8d8',
        200: '#e1d0b0',
        300: '#cfb282',  // Areia/trigo claro
        400: '#bd9057',
        500: '#a97234',  // Terroso médio
        600: '#8c5a27',
        700: '#6f441e',
        800: '#5a3619',
        900: '#4a2c14',
      },
  
      // --- QUENTES / ACENTO ---
      clay: {
        50:  '#fdf5f0',
        100: '#fce8db',
        200: '#f9cfb6',
        300: '#f4ae87',
        400: '#ed8452',
        500: '#e5622a',  // Laranja argila — CTA / destaque
        600: '#c94d1e',
        700: '#a73c18',
        800: '#883116',
        900: '#702915',
      },
  
      // --- NEUTROS ---
      linen: {
        50:  '#fdfcf8',  // Fundo principal (off-white quente)
        100: '#f7f3eb',
        200: '#ede5d4',
        300: '#dfd4bb',
        400: '#cbbfa1',
        500: '#b5a67e',
      },
  
      // --- ESCUROS ---
      bark: {
        700: '#2e2519',  // Texto principal escuro
        800: '#1e1810',
        900: '#120f08',
      },
    },
  
    fonts: {
      display: "'Playfair Display', serif",    // Títulos editoriais
      body:    "'DM Sans', sans-serif",        // Corpo de texto
      accent:  "'DM Mono', monospace",         // Labels / tags
    },
  
    /**
     * Mapeamento semântico — use estes em vez dos tokens brutos
     */
    semantic: {
      background:   '#fdfcf8',   // linen.50
      surface:      '#f7f3eb',   // linen.100
      primary:      '#4f8244',   // sage.500
      primaryDark:  '#305229',   // sage.700
      accent:       '#e5622a',   // clay.500
      text:         '#2e2519',   // bark.700
      textMuted:    '#a97234',   // earth.500
      border:       '#dfd4bb',   // linen.300
    },
  };
  
  export default theme;