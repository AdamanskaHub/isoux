// import css from 'rollup-plugin-css-only';

// export default {
//   input: 'src/main.js',
//   // output: { ... },
//   plugins: [
// +   css({ output: 'public/build/extra.css' })
//     // svelte({
//     //   ...
//     // })
//     // ...
//   ]
// };

import image from '@rollup/plugin-image';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [image()]
};