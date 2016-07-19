# ajax


````html
<div id="lll">我是父元素div.demo的兄弟元素div#lll</div>
<div class="demo" >
    div
    <span
        class="mo-btn mo-btn--info"
        data-ui='ajax'
        data-type='get'
        data-data='name=abc&age=24'
        data-url='/ajax/login/'
        data-remove="#lll"
        data-confirm="确认删除？"
        data-prompt='{"msg|错误原因":"","address":"ShangHai"}'
    >AJAX(get)</span>
</div>
````

````html
<div class="ttt">我是父元素div.demo的兄弟元素div.ttt</div>
<div class="demo" >
    我是父元素div.demo
    <span
        class="mo-btn mo-btn--info"
        data-ui='ajax'
        data-type='get'
        data-data='{"name":"abc","age":"24"}'
        data-url='/ajax/login/'
        data-remove=".ttt&next&.demo"
        data-confirm="确认删除？"
        data-prompt='{"msg|错误原因":""}'
    >AJAX(get)</span>
</div>
````

````html
<div class="lll">我是父元素div.demo的兄弟元素div.lll</div>
<div class="demo" >
    我是父元素div.demo
    <span
        class="mo-btn mo-btn--info"
        data-ui='ajax'
        data-type='post'
        data-data='{"name":"abc","age":"24"}'
        data-url='/ajax/login/'
        data-remove="closest&.demo&prev&.lll"
        data-confirm="确认删除？"
        data-prompt='{"msg|错误原因":""}'
    >AJAX(get)</span>
</div>
````

````html
<div class="demo" >
    我是父元素div.demo
    <span
        class="mo-btn mo-btn--info"
        data-ui='ajax'
        data-type='post'
        data-data='{"name":"abc","age":"24"}'
        data-url='/ajax/login/'
        data-remove="closest&.demo"
        data-confirm="确认删除？"
        data-prompt='{"msg|错误原因":""}'
    >AJAX(post)</span>
</div>
````

| 属性 | 默认值 | 可否为空 | 说明 |
|-----|-------|---------|-----|
| type | `"get"` | 必填 | `"get"` `"post"` |
| data | 无 | 必填 | 提交参数 对应 $.ajax({data: data}) 中的 data ,get提交支持json|
| url | 无 | 必填 | |
| remove | 无 |  | `"this" , 以 & 分隔的 jquery选择器 `closest&.demo`  , id或 class 选择器  `#demo` `.demo` , 不以"this"相对选择的选择器 `body#demo` `body.demo` |
| confirm | 无 |  | 当存在该属性则出现确认框，内容为确认信息 |



<!-- | jsonp | 无 | 当存在该属性则支持跨域  | -->

## prompt
`{"msg|错误原因":""}` 会出现 `prompt('错误原因')` 用户输入的内容将会保存数据 到 data-data 中增加  msg |
