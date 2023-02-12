const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isStatic = process.argv.includes("--static");

const buildDirectory = __dirname + (isStatic ? '/dist' : '');
console.log('Build directory: ' + buildDirectory);
const conf = {
    entry: ["@babel/polyfill", __dirname + '/src/start.js'],
    output: {
        path: buildDirectory,
        filename: 'bundle.js'
    },
    performance: {
        hints: false
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],
    mode: require.main == module ? 'production' : 'development',
    optimization: require.main == module ? {
        minimizer: [
            new UglifyJsPlugin({})
        ]
    } : {},
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};

if (require.main == module) {
    webpack(conf, function(err, info) {
        if (err) {
            console.log(err);
        }
        if (info && info.compilation.errors.length) {
            console.log(info.compilation.errors);
        }
    });
} else {
    module.exports = require('webpack-dev-middleware')(webpack(conf), {
        watchOptions: {
            aggregateTimeout: 300
        },
        publicPath: '/'
    });
}
