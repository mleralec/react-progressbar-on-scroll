import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/ProgressBar.tsx',
    output: {
        file: 'dist/index.js',
        name: 'index',
        globals: {
            react: 'React',
        },
        format: 'cjs' // for npm module (use with import/require)
        // format: 'iife' // for browser (use with React CDN)
        // format: 'umd' // for both
    },
    plugins: [
        resolve(),
        babel({ exclude: 'node_modules/**' }),
        typescript(),
        terser(),
        commonjs()
    ],
    external: [
        'react' 
    ]
};