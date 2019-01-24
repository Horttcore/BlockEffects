let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */
mix.sourceMaps()
    .react('assets/js/block-effects/index.js', 'dist/js/block-effects-editor.js')
    .copy('node_modules/aos/dist/aos.js', 'dist/js/block-effects.js')
    .sass('assets/sass/block-effects.sass', 'dist/css/block-effects.css')
    .sass('assets/sass/block-effects-editor.sass', 'dist/css/block-effects-editor.css');
