# cascade 单选级联下拉框

<a href="./iframe.html">./iframe.html</a>

## 基础

### 数据

````html
<script id="cascadeJSON" type="text/json">
{
    "ajax" : {
        "add" : {
            "action" : "/m/json/ajaxcascade.json",
            "method" : "post"
        },
        "update" : {
            "action" : "/m/json/ajaxcascade.json",
            "method" : "post"
        },
        "move" : {
            "action" : "/m/json/ajaxcascade.json",
            "method" : "post"
        }
    },
    "_column":"级联下拉框每级对应,没有此数据,则data数据有几级显示几级",
    "column":[
        {
            "label" : "系别",
            "type" : "dept"
        },
        {
            "label" : "专业",
            "type" : "major"
        },
        {
            "label" : "班级",
            "type" : "class"
        }
    ],
    "_data" : "级联下拉框所需所有数据" ,
    "data" : []
}
</script>
````

### demo

````html
<form data-form-ajax="true"  action="/m/json/ok.json" method="post">


    <div
        class="mo-cascade"
        data-cascade-name="school"
        data-cascade-value="a,a-a,a-a-b"
        data-cascade-options="#cascadeJSON"
    ></div>
    <hr />
    <!-- <div
        class="mo-cascade"
        data-cascade-value=""
        data-cascade-options="#cascadeJSON"
    ></div> -->

    <button type="submit" name="button">提交</button>
</form>
````

```js
/request
{
    type:'class',
    id:'currentId',
    path:'deptId,majorId'
}
/m/json/ajaxcascade.json
{
    "status": "success",
    "data": {
        "id": "2345789ug"
    }
}
```

## 详细
