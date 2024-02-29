const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );

    app.use(
        '/portfolio',
        createProxyMiddleware({
            target: 'https://emmanuel-portfolio-image-bucket.s3.us-west-2.amazonaws.com',
            changeOrigin: true,
        })
    )
};