import buble from 'rollup-plugin-buble';

export default {
  dest: 'src/bundle.js',
  entry: 'src/main.js',
  format: 'es',
  plugins: [ buble() ]
};
