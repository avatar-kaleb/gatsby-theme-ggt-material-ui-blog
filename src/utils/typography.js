import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '500']
    }
  ]
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
