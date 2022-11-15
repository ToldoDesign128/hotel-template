// webpack.mix.js
let mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    }
})

mix
    .sass('assets/scss/style.scss', '')
    .options({
        watchOptions: {
            ignored: /node_modules/
        }
    });

if (process.env.MIX_NOTIFICATIONS == 'false') {
    mix.disableNotifications();
}