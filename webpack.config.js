const WebpackAssetsManifest = require('webpack-assets-manifest');
const {resolve} = require("path");
module.exports = {
    entry: {
        client: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        chunkFilename: "[name]-[chunkhash].js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: new RegExp(
                        `[\\\/]node_modules[\\\/]`
                    ),
                    name: true,
                    filename: 'vendor.js',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new WebpackAssetsManifest({
            output: 'asset-manifest.json',
            entrypoints: true
        })
    ]
};
