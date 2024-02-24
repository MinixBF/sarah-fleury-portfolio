/** @type {import('tailwindcss').Config} */
import { screens as _screens } from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    theme: {
        screens: {
            ..._screens,
            '1xl': '1440px',
            '3xl': '1920px',
        },
        extend: {
            transitionProperty: {
                height: 'height',
            },
            fontFamily: {
                satista: ['Satista', 'sans-serif'],
                ultra: ['Ultra', 'sans-serif'],
            },
            colors: {
                bancha: {
                    50: '#d9dad1',
                    100: '#c3c3b5',
                    200: '#acad9a',
                    300: '#95977e',
                    400: '#7f8063',
                    500: '#686a47',
                    600: '#585a3c',
                    700: '#494a32',
                    800: '#393a27',
                    900: '#2a2a1c',
                    950: '#1a1b12',
                },
                cream: {
                    50: '#faf7f2',
                    75: '#FDF7F0',
                    100: '#f3eee1',
                    200: '#e8dec9',
                    300: '#d5c19c',
                    400: '#c3a374',
                    500: '#b68c59',
                    600: '#a97a4d',
                    700: '#8d6241',
                    800: '#72503a',
                    900: '#5d4231',
                    950: '#312119',
                },
                redwood: {
                    50: '#f7ebe9',
                    100: '#f0d3cd',
                    200: '#e9b9b0',
                    300: '#e19f93',
                    400: '#da856f',
                    500: '#d36b4b',
                    600: '#bd6044',
                    700: '#a15a4d',
                    800: '#8a5146',
                    900: '#6d443b',
                },
            },
        },
    },
    plugins: [],
};
