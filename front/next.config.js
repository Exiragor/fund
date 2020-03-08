const css = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.swf|svg$/,
            use: {
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name].[ext]'
                }
            }
        });
        return config
    }
};

module.exports = withPlugins([
    [css, {
        cssLoaderOptions: {
            url: false
        },
        publicRuntimeConfig: {
            API_URL: process.env.API_URL
        }
    }],
], nextConfig);
