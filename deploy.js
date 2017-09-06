var glob = require('glob')
var cpFile = require('cp-file')
var fs = require("fs")

// 管理后台 http://admin.xiaopinyun.com/
console.log('Start copy admin file:')
glob('output/**/**.*', function (err, files) {
    var copyCount = 0
    files.forEach(function (path) {
        var destPath = path.replace(/^output/, '../../../svn/xiaopin/Admin/static/')
        var stat = fs.lstatSync(path)
        var rHtmlFile = /\.htm(l)?$/
        if (!stat.isDirectory() && !rHtmlFile.test(path)) {
            cpFile.sync(path, destPath)
            copyCount++
        }
    })
    console.log('deploy admin file: ' + copyCount)
})

// 教师管理系统 http://school.xiaopinyun.com/
console.log('Start copy school file:')
glob('output/**/**.*', function (err, files) {
    var copyCount = 0
    files.forEach(function (path) {
        var destPath = path.replace(/^output/, '../../../svn/xiaopin/School/static/')
        var stat = fs.lstatSync(path)
        var rHtmlFile = /\.htm(l)?$/
        if (!stat.isDirectory() && !rHtmlFile.test(path)) {
            cpFile.sync(path, destPath)
            copyCount++
        }
    })
    console.log('deploy school file: ' + copyCount)
})

// 前台页面 http://www.xiaopinyun.com/
console.log('Start copy template file:')
glob('output/**/**.*', function (err, files) {
    var copyCount = 0
    files.forEach(function (path) {
        var destPath = path.replace(/^output/, '../../../svn/xiaopin/static/')
        var stat = fs.lstatSync(path)
        var rHtmlFile = /\.htm(l)?$/
        if (!stat.isDirectory() && !rHtmlFile.test(path)) {
            cpFile.sync(path, destPath)
            copyCount++
        }
    })
    console.log('deploy template file: ' + copyCount)
})
