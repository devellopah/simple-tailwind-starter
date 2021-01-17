// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

// module.exports = {
//   separator: '_',
//   theme: {
//     container: {
//       center: true,
//     },
//     colors: {
//       transparent: 'transparent',
//       black: '#000000',
//       white: '#ffffff',
//       keppel: '#42AFA2',
//       primary: '#42AFA2',
//       gossamer: '#389488',
//       patina: '#689893',
//       cream: '#F2C14D',
//       tundora: '#4A4A4A',
//       dovegray: '#666666',
//       nobel: '#9B9B9B',
//       solitude: '#F2F2F6',
//       gainsboro: '#dddddd',
//       nightrider: '#333333',
//       monza: '#D0021B',
//       alto: '#cfcfcf',
//       royalblue: '#4A90E2',
//       'white-400': 'rgba(255, 255, 255, 0.4)',
//       'gainsboro-400': 'rgba(221, 221, 221, 0.4)',
//       'nobel-200': 'rgba(155, 155, 155, 0.2)',
//       'primary-100': 'rgba(66, 175, 162, 0.1)',
//       'primary-200': 'rgba(66, 175, 162, 0.2)',
//       'primary-300': 'rgba(66, 175, 162, 0.3)',
//       'alto-400': 'rgba(207, 207, 207, 0.4)',

//     },
//     aspectRatio: {
//       'square': [1, 1],
//       '16/9': [16, 9],
//       '4/3': [4, 3],
//       '21/9': [21, 9],
//     },
//     extend: {
//       // Adds a new breakpoint in addition to the default breakpoints
//       // screens: {
//       //   'xs': '480px',
//       // },
//       fontFamily: {
//         raleway: [
//           'Raleway',
//           ...defaultTheme.fontFamily.sans
//         ],
//         arialmt: [
//           'ArialMT',
//           ...defaultTheme.fontFamily.sans
//         ]
//       },
//       fontSize: {
//         0: '0',
//         1: '0.0625rem',
//         2: '0.125rem',
//         3: '0.1875rem',
//         4: '0.25rem',
//         5: '0.3125rem',
//         6: '0.375rem',
//         7: '0.4375rem',
//         8: '0.5rem',
//         9: '0.5625rem',
//         10: '0.625rem',
//         11: '0.6875rem',
//         12: '0.75rem',
//         13: '0.8125rem',
//         14: '0.875rem',
//         15: '0.9375rem',
//         40: '2.5rem',
//       },
//       spacing: {
//         '2px': '0.125rem',
//       },
//       letterSpacing: {
//         ghost: '0.0125em',
//       },
//       boxShadow: {
//         'dropdown': '0px 0px 33px rgba(0, 0, 0, 0.202842)',
//         'block': '0px 0px 3px rgba(0, 0, 0, 0.03)',
//         'table': '0px 1px 4px rgba(0, 0, 0, 0.0825125)',
//         'primary': '0px 0px 4px #42AFA2',
//       },
//       zIndex: {
//         dropdown: '1000',
//         sticky: '1020',
//         fixed: '1030',
//         backdrop: '1040',
//         modal: '1050',
//         popover: '1060',
//         tooltip: '1070',
//       },
//     }
//   },
//   variants: {
//     textColor: ['responsive', 'hover', 'focus', 'group-hover'],
//     display: ['responsive', 'hover', 'focus', 'group-hover'],
//   },
//   plugins: [
//     require("tailwindcss-responsive-embed")(),
//     require("tailwindcss-aspect-ratio")(),
//   ]
// }