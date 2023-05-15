const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const path = require('path');
const { join } = require('path');
const colors = require('tailwindcss/colors');
const angularMaterialPalettePlugin = require(path.resolve(__dirname, 'src/styles/theming.js'));


const themes = {
  // Default theme is required for theming system to work correctly!
  'default': {
    primary: {
      ...colors.indigo,
      DEFAULT: colors.indigo[600]
    },
    accent: {
      ...colors.slate,
      DEFAULT: colors.slate[800]
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600]
    },
    'on-warn': {
      500: colors.red['50']
    }
  },
  'teal': {
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[600]
    }
  },
  'rose': {
    primary: colors.rose
  },
  'purple': {
    primary: {
      ...colors.purple,
      DEFAULT: colors.purple[600]
    }
  },
  'amber': {
    primary: colors.amber
  }
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {

    extend: {
    },
  },
  plugins: [require(path.resolve(__dirname, ('./src/styles/theming')))({ themes }),]
};
