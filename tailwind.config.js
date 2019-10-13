module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter var experimental', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '64': '16rem'
      },
      minWidth: {
        '56': '14rem'
      },
      spacing: {
        '14': '3.5rem',
        '72': '18rem',
        '80': '20rem'
      },
      boxShadow: {
        'outline-px': '0 0 0 1px rgba(66,153,225,0.5)'
      },
      borderRadius: {
        '5px': '5px',
        '6px': '6px',
        '12px': '12px'
      },
    }
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus']
  },
  plugins: []
};
