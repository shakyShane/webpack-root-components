const WebpackAssetsManifest = require('webpack-assets-manifest');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const StatsPlugin = require('stats-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {resolve} = require("path");
const mode = 'production';
module.exports = {
    entry: {
        client: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        chunkFilename: "[name].js"
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    mode === 'development' && 'style-loader',
                    mode === 'production' && MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName:
                                '[name]-[local]-[hash:base64:3]',
                            modules: true
                        }
                    }
                ].filter(Boolean)
            }
        ]
    },
    plugins: [
        mode === 'production' && new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
        }),
        new WebpackAssetsManifest({
            output: 'asset-manifest.json',
            entrypoints: true
        }),
        new StatsPlugin('stats.json'),
        // new BundleAnalyzerPlugin()
    ].filter(Boolean)
};
