fis.hook('relative');
// fis.match('**', {
//   relative: true
// })
fis.media('online').match('**', {
    domain: 'http://onface.cc/admin'
})
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
                       [
                        "transform-react-jsx",
                        {pragma: 'require("react").createElement'}
                       ],
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
            <link rel="stylesheet" href="/admin.less">
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
                    <div class="mo-2-side-item-hd">
                        <span class="fa fa-user"></span>登录
                    </div>
                    <div class="mo-2-side-item-bd">
                        <a class="mo-2-side-item-bd-link" href="/m/login/README.md" ><span class="fa fa-user"></span>登录1</a>
                        <a class="mo-2-side-item-bd-link" href="/m/login2/README.md" ><span class="fa fa-user"></span>登录2</a>
                        <a class="mo-2-side-item-bd-link" href="/m/login3/README.md" ><span class="fa fa-user"></span>登录3</a>
                        <a class="mo-2-side-item-bd-link" href="/m/login4/README.md" ><span class="fa fa-user"></span>登录4</a>
                        <a class="mo-2-side-item-bd-link" href="/m/login5/README.md" ><span class="fa fa-user"></span>登录5</a>
                    </div>
                </div>
                <div class="mo-2-side-item">
                    <div class="mo-2-side-item-hd">
                        <span class="fa fa-desktop"></span>布局
                    </div>
                    <div class="mo-2-side-item-bd">
                        <a class="mo-2-side-item-bd-link" href="/m/1/README.md" ><span class="fa fa-desktop"></span>布局1</a>
                        <a class="mo-2-side-item-bd-link" href="/m/2/README.md" ><span class="fa fa-desktop"></span>布局2</a>
                        <a class="mo-2-side-item-bd-link" href="/m/3/README.md" ><span class="fa fa-desktop"></span>布局3</a>
                        <a class="mo-2-side-item-bd-link" href="/m/4/README.md" ><span class="fa fa-desktop"></span>布局4</a>
                        <a class="mo-2-side-item-bd-link" href="/m/5/README.md" ><span class="fa fa-desktop"></span>布局5</a>
                        <a class="mo-2-side-item-bd-link" href="/m/6/README.md" ><span class="fa fa-desktop"></span>布局6</a>
                    </div>
                </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-info"></span>展示类
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/panel/README.md" ><span class="fa fa-info"></span>统计面板</a>
                            <a class="mo-2-side-item-bd-link" href="/m/step/README.md" ><span class="fa fa-braille"></span>步骤</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-list-alt"></span>按钮和表单
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/btn/README.md" ><span class="fa fa-edit"></span>按钮</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/form-input/README.md" ><span class="fa fa-list"></span>表单</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/time/README.md" ><span class="fa fa-arrows"></span>日期</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/editor/README.md" ><span class="fa fa-edit"></span>编辑器</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-list"></span>盒子/列表/面包屑/分页
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/box/README.md" ><span class="fa fa-edit"></span>盒子</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/table/README.md" ><span class="fa fa-list"></span>列表</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/crumb/README.md" ><span class="fa fa-info-circle"></span>面包屑</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tab/README.md" ><span class="fa fa-info-circle"></span>tab切换</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/paging/README.md" ><span class="fa fa-list"></span>分页</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-tags"></span>提示和标签
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/alert/README.md" ><span class="fa fa-edit"></span>提示条</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tipbox/README.md" ><span class="fa fa-list"></span>提示框</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <div class="mo-2-side-item-hd">
                            <span class="fa fa-rocket"></span>功能组件
                        </div>
                        <div class="mo-2-side-item-bd">
                            <a class="mo-2-side-item-bd-link" href="/m/ajax/README.md" ><span class="fa fa-edit"></span>ajax</a>
                            <a class="mo-2-side-item-bd-link" href="/m/edit/README.md" ><span class="fa fa-edit"></span>编辑文字</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/upload/README.md" ><span class="fa fa-list"></span>图片上传</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/linkage/README.md" ><span class="fa fa-list"></span>层级选择</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/copy/README.md" ><span class="fa fa-copy"></span>复制组件</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/remove/README.md" ><span class="fa fa-remove"></span>删除功能</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/filter/README.md" ><span class="fa fa-search"></span>filter</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/sort/README.md" ><span class="fa fa-arrows"></span>排序</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tree/README.md" ><span class="fa fa-tree"></span>树级菜单</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/tree-select/README.md" ><span class="fa fa-tree"></span>树级下拉菜单</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/dialog/README.md" ><span class="fa fa-file-text-o"></span>弹窗</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/ajaxtable/README.md" ><span class="fa fa-table"></span>ajax table</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/ajaxselect/README.md" ><span class="fa fa-table"></span>ajax select</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/cascade/README.md" ><span class="fa fa-table"></span>cascade级联下拉框</a>
                            <a class="mo-2-side-item-bd-link"  href="/m/calendar/README.md" ><span class="fa fa-table"></span>日历</a>
                        </div>
                    </div>
                    <div class="mo-2-side-item">
                        <a class="mo-2-side-item-hd" href="/m/grid/README.md" >
                            <span class="fa fa-columns"></span>24等分排版
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
            <script src="/admin-deps.js"></script>
            <script src="/admin.js"></script>
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
            },
            modulesDirectories: ['node_modules']
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
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015'],
                        exclude: function (path) {
                            var isNpmModule = !!path.match(/node_modules/);
                            return isNpmModule;
                        },
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
fis.match('/admin.js', {
    release: true,
    parser: [
        fis.plugin('webpack', conf.webpack),
        fis.plugin('inlinecss')
    ]
})
fis.match('/admin.less', {
    relative: true
})
fis.match('{**.less,**.css}', {
    release: false
})
fis.match('{/admin.less,/m/doc/index.less,/admin-deps.js}', {
    release: true
})


fis.match('/node_modules/**', {
    release: false
})

fis.media('online').match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.media('online').match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.media('online').match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
