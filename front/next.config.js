const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    }
});
