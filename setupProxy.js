const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/google-scripts',
    createProxyMiddleware({
      target: 'https://script.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/google-scripts': '',
      },
    }),
  );
};
