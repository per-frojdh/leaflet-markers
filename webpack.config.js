const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map', // Should only be used for develop
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port <--dev server
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors <-- reloading server
        'babel-polyfill',
        './src/index', // app entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'L_PREFER_CANVAS': true,
        }),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                include: path.join(__dirname, 'src'),
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'react-hot', 'babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader',
            },
        {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]',
            },

        ],

    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery: __dirname + '/node_modules/jquery/dist/jquery.min.js',
            leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",
            leaflet_marker: __dirname + "/node_modules/leaflet/dist/images/marker-icon.png",
            leaflet_marker_2x: __dirname + "/node_modules/leaflet/dist/images/marker-icon-2x.png",
            leaflet_marker_shadow: __dirname + "/node_modules/leaflet/dist/images/marker-shadow.png",
            leaflet_draw_css: __dirname + '/node_modules/leaflet-draw/dist/leaflet.draw.css',
            proj4: __dirname + "/node_modules/proj4/dist/proj4-src.js",
            proj4Leaflet: __dirname + "/node_modules/proj4leaflet/src/proj4leaflet.js",
            PREFER_CANVAS: true,
        }
    },
};
