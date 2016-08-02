var conf = {
    // require 被替换的全局变量
    webpackExternals: {
        // var $ = require('jquery') 等于 var $ = window.__FAST_ADMIN_EXTERNALS_.jQuery
        'jquery': '__FAST_ADMIN_EXTERNALS_.jQuery',
        'react': '__FAST_ADMIN_EXTERNALS_.React',
        'react-dom': '__FAST_ADMIN_EXTERNALS_.ReactDOM'
    },
    // markdown 可运行代码的配置模板
    markrun: {
        lang: {
            js: function (source) {
                var result = require('babel-core').transform(source, {
                    presets: [
                         "es2015"
                    ],
                    plugins: [
                       ["transform-react-jsx", {pragma: 'require("react").createElement'}],
                       "transform-flow-strip-types",
                       "syntax-flow",
                       "syntax-jsx",
                       "transform-react-display-name",
                       "transform-decorators-legacy",
                       "transform-class-properties"
                    ]
                })
                return {
                    type: 'js',
                    code: result.code
                }
            }
        },
        template: function () {
        /*!
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="/fast-admin.less">
            <link rel="stylesheet" href="/m/doc/index.less" />
            <title> <%- title %></title>
        </head>
        <body class="mo-2-sub-body" >
            <div class="mo-2">
                <div class="mo-2-head">
                    <div class="mo-2-head-logo"><img class="mo-2-head-logo-pic" src="http://oajxfbadi.bkt.clouddn.com/admin/images/flow-logo-white.png" alt="">管理后台</div>
                    <div class="mo-2-head-more">
                        <a class="mo-2-head-more-link" href="#" >
                            <span class="fa fa-user"></span>Hi,admin
                        </a>
                        <a class="mo-2-head-more-link" href="#" >
                            <span class="fa fa-home"></span>返回网站首页
                        </a>
                    </div>
                </div>
                <div class="mo-2-side">
                <div class="mo-2-side-item">
                    <a class="mo-2-side-item-hd" href="/" >
                        <span class="fa fa-home"></span>首页
                    </a>
                </div>
                    <div class="mo-2-side-item">
                        <a class="mo-2-side-item-hd" href="/m/login/README.html" >
                            <span class="fa fa-user"></span>登录
                        </a>
                    </div>
                    <div class="mo-2-side-item">
                        <a class="mo-2-side-item-hd" href="/m/1/README.html" >
                            <span class="fa fa-desktop"></span>布局1
                        </a>
                    </div>
                    <div class="mo-2-side-item">
                        <a class="mo-2-side-item-hd" href="/m/2/README.html" >
                            <span class="fa fa-desktop"></span>布局2
                        </a>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-wpforms"></span>按钮和表单
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/btn/README.md" ><span class="fa fa-edit"></span>按钮</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/form-input/README.md" ><span class="fa fa-list"></span>表单</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-list"></span>盒子/列表/面包屑
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/box/README.md" ><span class="fa fa-edit"></span>盒子</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/table/README.md" ><span class="fa fa-list"></span>列表</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/crumb/README.md" ><span class="fa fa-info-circle"></span>面包屑</a>

                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-tags"></span>提示和标签
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/alert/README.md" ><span class="fa fa-edit"></span>提交条</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tipbox/README.md" ><span class="fa fa-list"></span>提示框</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tag/README.md" ><span class="fa fa-list"></span>标签</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-rocket"></span>功能组件
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/ajax/README.md" ><span class="fa fa-edit"></span>ajax</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/upload/README.md" ><span class="fa fa-list"></span>图片上传</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/linkage/README.md" ><span class="fa fa-list"></span>层级选择</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/copy/README.md" ><span class="fa fa-copy"></span>复制组件</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/remove/README.md" ><span class="fa fa-remove"></span>删除功能</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/filter/README.md" ><span class="fa fa-search"></span>filter</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <a class="mo-2-side-item-hd" href="/m/grid/README.md" >
                            <span class="fa fa-star"></span>24等分布局
                        </a>
                    </div>
                </div>
                <div class="mo-2-cnt">
                    <%- content %>
                </div>
                <div class="mo-2-foot">
                    <div class="mo-2-foot-side">
                        <a href="https://github.com/fast-flow/admin" target="_blank" >https://github.com/fast-flow/admin</a>
                    </div>
                    <div class="mo-2-foot-copyright">
                        Create By <a href="https://github.com/fast-flow/admin" target="_blank" >fast-flow</a>
                    </div>
                </div>
            </div>
            <script src="/fast-admin-deps.js"></script>
            <script src="/fast-admin.js"></script>
            <script>
            ;(function ($) {
                var $currentItem = $('.mo-2-side-item-bd-link,.mo-2-side-item-hd').filter('[href="' + location.pathname + '"]')
                $currentItem.closest('.mo-2-side-item').addClass('mo-2-side-item--on')
            })(__FAST_ADMIN_EXTERNALS_.$)
            </script>
        </html>
        */
        }.toString()
               .replace(/^[^\/]+\/\*!?/, '')
               .replace(/\*\/[^\/]+$/, '')
               .replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '') // .trim()
    },
    // webpack 的配置
    webpack: {
        devtool: 'source-map',
        externals: '不要在这里配置全局变量替换 require 通过 webpackExternals 配置,',
        resolve: {
            alias: {
                // 通过别名给 moment 打包提速
                moment: "moment/min/moment-with-locales.min.js",
                '../css/ui-dialog.css': "artdialog/css/ui-dialog.css"
            }
        },
        module: {
            // 通过 noParse 给 moment 打包提速
            noParse: [
                /moment-with-locales/
            ],
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
                        presets: ['es2015'],
                        plugins: [
                           ["transform-react-jsx", {pragma: 'require("react").createElement'}],
                           "transform-flow-strip-types",
                           "syntax-flow",
                           "syntax-jsx",
                           "transform-react-display-name",
                           "transform-decorators-legacy",
                           "transform-class-properties"
                        ]
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
fis.match('/node_modules/**', {
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
