__inline('/node_modules/react/dist/react.js')
__inline('/node_modules/react-dom/dist/react-dom.min.js')
__inline('/node_modules/jquery/dist/jquery.min.js')
;(function (globalVariable) {
    var variableName
    var i
    window.__FAST_ADMIN_EXTERNALS_ = window.__FAST_ADMIN_EXTERNALS_ || {}
    for (i = 0; i < globalVariable.length; i++) {
        var variableName = globalVariable[i]
        window.__FAST_ADMIN_EXTERNALS_[variableName] = window[variableName]
        window[variableName] = null
    }
})(
    [
        'jQuery',
        '$',
        'React',
        'ReactDOM'
    ]
)
