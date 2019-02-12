__inline('/node_modules/react/dist/react.js')
__inline('/node_modules/react-dom/dist/react-dom.min.js')
__inline('/node_modules/jquery/dist/jquery.min.js')
__inline('/m/editor/simditor.js')
;(function (globalVariable) {
    var variableName
    var i
    window.__FAST_ADMIN_EXTERNALS_ = window.__FAST_ADMIN_EXTERNALS_ || {}
    for (i = 0; i < globalVariable.length; i++) {
        var variableName = globalVariable[i]
        window.__FAST_ADMIN_EXTERNALS_[variableName] = window[variableName]
        // 为避免与其他框架冲突不取消全局变量
        // window[variableName] = null
    }
    __FAST_ADMIN_EXTERNALS_.jQuery
})(
    [
        'jQuery',
        '$',
        'React',
        'ReactDOM'
    ]
)
