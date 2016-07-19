var conf = {
    // require 被替换的全局变量
    webpackExternals: {
        // var $ = require('jquery') 等于 var $ = window.__WOKE_EXTERNALS_.jQuery
        'jquery': '__WOKE_EXTERNALS_.jQuery',
        'react': '__WOKE_EXTERNALS_.React',
        'react-dom': '__WOKE_EXTERNALS_.ReactDOM'
    },
    // markdown 可运行代码的配置模板
    markrun: {
        lang: {
            js: function (source) {
                var result = require('babel-core').transform(source, {
                    presets: [
                         require('babel-preset-es2015'),
                         require('babel-preset-react')
                    ],
                    plugins: [
                        "babel-plugin-transform-decorators-legacy",
                        "babel-plugin-transform-class-properties"
                    ]
                })
                return {
                    type: 'js',
                    code: result.code
                }
            }
        },
        template: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge" ></meta>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
<link rel="stylesheet" href="/fast-admin.less" />
<title> <%- title %></title>
</head>
<body>
<%- content %>
<script src="/fast-admin.js" ></script>
</body>
</html>`
    },
    // webpack 的配置
    webpack: {
        devtool: 'source-map',
        externals: '不要在这里配置全局变量替换 require 通过 webpackExternals 配置,',
        resolve: {
            alias: {
                // 通过别名给 moment 打包提速
                moment: "moment/min/moment-with-locales.min.js"
            }
        },
        module: {
            // 通过 noParse 给 moment 打包提速
            noParse: [/moment-with-locales/],
            postLoaders: [
                // 如果不需要兼容IE8请去掉 es3ify
                {
                    test: /\.js$/,
                    loaders: ['es3ify']
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react'],
                        plugins: ["transform-decorators-legacy","transform-class-properties"]
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style!css"
                },
                {
                    test: /\.less$/,
                    loader: "style!css!less"
                }
            ]
        }
    }
}



var LessPluginFunctions = require('less-plugin-functions')
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: [
            new LessPluginFunctions()
        ]
    })
})

var markrun = require('markrun')
fis.match('*.md', {
    rExt: '.html',
    parser: function (content) {
        var html = markrun(content, conf.markrun)
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})

conf.webpack.externals = conf.webpackExternals
fis.match('/fast-admin.js', {
    parser: [
        fis.plugin('webpack', conf.webpack),
        fis.plugin('inlinecss')
    ]
})



fis.match('{package.json,mobe.js,fis-conf.js}', {
    release: false
})

fis.media('qa').match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.media('qa').match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.media('qa').match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
// 发布时非 html 资源都进行 hash 处理
fis.media('qa').match('*', {
  useHash: true
});
fis.media('qa').match('*.html', {
  useHash: false
});
