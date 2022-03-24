module.exports = {
  separator: '_',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    layers: ['utilities'],
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