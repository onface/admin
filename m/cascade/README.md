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
    "data" : [
        {
            "name":"系别a",
            "id":"a",
            "child":[
                {
                    "name":"专业a-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"班级a-a-a",
                            "id":"a",
                            "child":[
                                {
                                    "name":"测试第四级数据a-a-a-a",
                                    "id":"a"
                                },{
                                    "name":"测试第四级数据a-a-a-b",
                                    "id":"b"
                                }
                            ]
                        },{
                            "name":"班级a-a-b",
                            "id":"b",
                            "child":[
                                {
                                    "name":"测试第四级数据a-a-b-a",
                                    "id":"a"
                                },{
                                    "name":"测试第四级数据a-a-b-b",
                                    "id":"b"
                                }
                            ]
                        }
                    ]
                },{
                    "name":"专业a-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"班级a-b-a",
                            "id":"a"
                        },{
                            "name":"班级a-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"系别b",
            "id":"b",
            "child":[
                {
                    "name":"专业b-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"班级b-a-a",
                            "id":"a"
                        },{
                            "name":"班级b-a-b",
                            "id":"b"
                        }
                    ]
                },{
                    "name":"专业b-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"班级b-b-a",
                            "id":"a"
                        },{
                            "name":"班级b-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"系别c",
            "id":"c",
            "child":[
                {
                    "name":"专业c-a(没有第三级数据测试)",
                    "id":"a"
                },{
                    "name":"专业c-b(没有第三级数据测试)",
                    "id":"b"
                }
            ]
        },{
            "name":"系别d(没有第二级数据测试)",
            "id":"d"
        }
    ]
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
/m/json/ajaxcascade.json
{
    "status": "success",
    "data": {
        "id": "2345789ug"
    }
}
```

## 详细
