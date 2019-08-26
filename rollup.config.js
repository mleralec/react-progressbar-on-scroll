import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/index.js',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        format: 'iife' // for browser (use with React CDN)
        // format: 'cjs' // for npm module (use with import/require)
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
        'react', 
        'react-dom'
    ]
};