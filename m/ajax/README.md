# ajax


````html
<span   class="mo-btn mo-btn--info"
        data-ajax-method="get"
        data-ajax-data="action=ok"
        data-ajax-url="/m/json/ok.json"
>ok</span>

<span   class="mo-btn mo-btn--info"
        data-ajax-method="get"
        data-ajax-data="action=ok"
        data-ajax-url="/m/json/ok-msg.json"
>ok-msg</span>
<span   class="mo-btn mo-btn--danger"
        data-ajax-method="get"
        data-ajax-data="action=error&id=1"
        data-ajax-url="/m/json/err.json"
>error</span>
````html

```js
/m/json/ok.json
{
    "status": "success"
}
/m/json/ok-msg.json
{
    "status": "success",
    "msg": "成功提示"
}
/m/json/err.json
{
    "status": "error",
    "msg": "错误原因"
}
```

## data-ajax-method

请求方式
```
data-ajax-method="get"
data-ajax-method="post"
```
默认值：`get`

## data-ajax-data

提交参数

```
data-ajax-data="name=value"
data-ajax-data="name=value&name2=value2"
data-ajax-data="name[]=nimo&name[]=fast"
```

## data-ajax-url

请求地址

```
data-ajax-url="/some.php"
```


## data-ajax-confirm 确认

````html
<span   class="mo-btn mo-btn--danger"
        data-ajax-confirm="确认删除？"
        data-ajax-method="get"
        data-ajax-data="id=1"  
        data-ajax-url="/m/json/ok.json"
>remove</span>
````

## data-ajax-remove


````html
<div class="js-list" >
    abcdef
    <span   class="mo-btn mo-btn--danger"
            data-ajax-remove="closest&.js-list"
            data-ajax-data="id=1"  
            data-ajax-url="/m/json/ok.json"
    >remove</span>
</div>
````

以 `&` 为分隔符配置选择器，以**当前操作元素为起始元素**

`方法&目&方法&目标`

或者第一个是 `目标` 则以**目标为起始元素**

### 方法

| 方法名 | 描述 |
|-------|-----|
| closest | 从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。以数组的形式返回与选择器相匹配的所有元素，从当前元素开始，在 DOM 树中向上遍历。 |
| find | 通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代。 |

更多方法请访问：http://www.jquery123.com/category/traversing/tree-traversal/

### 目标

目标就是 jQuery 选择器

`.js-demo` `tr` `tr>a`


### 目标为起始元素

````html
<div id="ajaxremovetarget">ajaxremovetarget</div>

<span   class="mo-btn mo-btn--danger"
        data-ajax-remove="#ajaxremovetarget"
        data-ajax-data="id=1"  
        data-ajax-url="/m/json/ok.json"
>remove</span>
````

````html
<div id="ajaxremovetarget2">
    <h2>目标</h2>
    <span>我要被干掉了</span>
</div>

<span   class="mo-btn mo-btn--danger"
        data-ajax-remove="#ajaxremovetarget2&find&span"
        data-ajax-data="id=1"  
        data-ajax-url="/m/json/ok.json"
>remove</span>
````

## data-ajax-href

```js
// m/json/ok-href.json
{
    "status": "success",
    "data": {
        "href": "/"
    }
}
```

````html
<span class="mo-btn" data-ajax-url="/m/json/ok-href.json">href</span>
````

AJAX响应的JSON中存在 `data.href` ，且 `status` 等于 `success` 时候会根据 `data.href` 的地址跳转。


### timeout

```js
// m/json/ok-href-timeout.json
{
    "status": "success",
    "data": {
        "href": "/",
        "timeout": 1000
    }
}
```

响应的JSON中存在 `data.timeout` 则会延迟跳转到 `data.href`，延迟的时间是 `timeout` 的值

````html
<span class="mo-btn" data-ajax-url="/m/json/ok-href-timeout.json">timeout</span>
````


## checkbox 删除选中项
<!-- 未来如果有更好的方式，则换一个方法名，并建议用户不要使用 checkbox  -->

````html
<span class="mo-btn mo-btn--danger" data-ajax-url="/m/json/ok.json" data-ajax-checkbox=".js-people:checked" data-ajax-remove=".js-people:checked&closest&.js-item" >删除选中项目</span>
<div class="js-item" >
    <input name="id" value="1" type="checkbox" class="mo-input js-people" /> 张三
</div>
<div class="js-item" >
    <input name="id" value="2" type="checkbox" class="mo-input js-people" /> 李四
</div>
<div class="js-item" >
    <input name="id" value="3" type="checkbox" class="mo-input js-people" /> 王五
</div>
````

## 全选反选

[请查看 checkall 模块](../checkall/README.md)


## ajax 响应后回调

````html
<span   class="mo-btn mo-btn--info"
        data-ajax-method="get"
        data-ajax-data="action=ok"
        data-ajax-url="/m/json/ok-msg.json"
        data-ajax-callback="ajaxsome"
>callback</span>
<script>
window.ajaxsome = function (res, $element) {
    console.log('ajax-callback')
    console.log(res)
    console.log($element)
    // 根据 res 做一些事情
}
</script>
````
