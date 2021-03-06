// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    // index: path.resolve(__dirname, '../dist/index.html'),
    // assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/py/': {
        target: 'http://py-api.domain.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/py/': ''
        }
      },
      '/api/open/': {
        target: 'https://site-json-api.domain.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api/open/': ''
        }
      },
      '/api': {
        target: 'https://site-prod-api.domain.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  },
  staging: {
    env: require('./staging.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'https://site-staging.domain.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  },
  prod: {
    env: require('./prod.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/py/': {
        target: 'http://py-api.domain.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/py/': ''
        }
      },
      '/api/open/': {
        target: 'https://site-json-api.domain.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api/open/': ''
        }
      },
      '/api': {
        target: 'https://saa.domain.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  },
  local: {
    env: require('./local.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  }
}
