/*
    // 后端渲染脚本端口
    // 若要模拟 php 渲染页面，则取消注释
    // 并安装命令行 php 5.4.0 以上版本
var exec = require('exec')
exec('php -S 127.0.0.1:2009 -t view/mock/', function(err, out, code) {
    if (err instanceof Error) {
        throw err;
    }
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);
});
*/

var app = require('fms')
app.run({
    static: './output',
    port: '2000',
    read: [''],
    view: {
        server: 'http://127.0.0.1:2009',
        templateDir: './output/view/'
    }
})
