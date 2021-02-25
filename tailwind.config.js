module.exports = {
  separator: '_',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['components', 'utilities'],
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}