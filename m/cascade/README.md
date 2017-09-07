# cascade 单选级联下拉框

<a href="./iframe.html">./iframe.html</a>

## 基础

### 基础 - 数据

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
            "label" : "学院",
            "type" : "college"
        },
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
            "name":"学院a",
            "id":"a",
            "child":[
                {
                    "name":"系别a-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"专业a-a-a",
                            "id":"a",
                            "child":[
                                {
                                    "name":"班级a-a-a-a",
                                    "id":"a"
                                },{
                                    "name":"班级a-a-a-b",
                                    "id":"b"
                                }
                            ]
                        },{
                            "name":"专业a-a-b",
                            "id":"b",
                            "child":[
                                {
                                    "name":"班级a-a-b-a",
                                    "id":"a"
                                },{
                                    "name":"班级a-a-b-b",
                                    "id":"b"
                                }
                            ]
                        }
                    ]
                },{
                    "name":"系别a-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"专业a-b-a",
                            "id":"a"
                        },{
                            "name":"专业a-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"学院b",
            "id":"b",
            "child":[
                {
                    "name":"系别b-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"专业b-a-a",
                            "id":"a"
                        },{
                            "name":"专业b-a-b",
                            "id":"b"
                        }
                    ]
                },{
                    "name":"系别b-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"专业b-b-a",
                            "id":"a"
                        },{
                            "name":"专业b-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"学院c",
            "id":"c",
            "child":[
                {
                    "name":"系别c-a(没有第三级数据测试)",
                    "id":"a"
                },{
                    "name":"系别c-b(没有第三级数据测试)",
                    "id":"b"
                }
            ]
        },{
            "name":"学院d(没有第二级数据测试)",
            "id":"d"
        }
    ]
}
</script>
````

### 基础 - demo

````html
<form data-form-ajax="true"  action="/m/json/ok.json" method="post">


    <div
        class="mo-cascade"
        data-cascade-name="school"
        data-cascade-value="a,a-a"
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

## placeholder 可选

### placeholder 可选 - 数据

````html
<script id="cascadeJSON2" type="text/json">
{
    "ajax" : {},
    "_column":"级联下拉框每级对应,没有此数据,则data数据有几级显示几级",
    "column":[
        {
            "label" : "学院",
            "type" : "college"
        },
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
            "name":"请选择",
            "id":"0"
        },
        {
            "name":"学院a",
            "id":"a",
            "child":[
                {
                    "name":"请选择",
                    "id":"0"
                },
                {
                    "name":"系别a-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"请选择",
                            "id":"0"
                        },
                        {
                            "name":"专业a-a-a",
                            "id":"a",
                            "child":[
                                {
                                    "name":"请选择",
                                    "id":"0"
                                },
                                {
                                    "name":"班级a-a-a-a",
                                    "id":"a"
                                },{
                                    "name":"班级a-a-a-b",
                                    "id":"b"
                                }
                            ]
                        },{
                            "name":"专业a-a-b",
                            "id":"b",
                            "child":[
                                {
                                    "name":"请选择",
                                    "id":"0"
                                },
                                {
                                    "name":"班级a-a-b-a",
                                    "id":"a"
                                },{
                                    "name":"班级a-a-b-b",
                                    "id":"b"
                                }
                            ]
                        }
                    ]
                },{
                    "name":"系别a-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"请选择",
                            "id":"0"
                        },
                        {
                            "name":"专业a-b-a",
                            "id":"a"
                        },{
                            "name":"专业a-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"学院b",
            "id":"b",
            "child":[
                {
                    "name":"请选择",
                    "id":"0"
                },
                {
                    "name":"系别b-a",
                    "id":"a",
                    "child":[
                        {
                            "name":"请选择",
                            "id":"0"
                        },
                        {
                            "name":"专业b-a-a",
                            "id":"a"
                        },{
                            "name":"专业b-a-b",
                            "id":"b"
                        }
                    ]
                },{
                    "name":"系别b-b",
                    "id":"b",
                    "child":[
                        {
                            "name":"请选择",
                            "id":"0"
                        },
                        {
                            "name":"专业b-b-a",
                            "id":"a"
                        },{
                            "name":"专业b-b-b",
                            "id":"b"
                        }
                    ]
                }
            ]
        },{
            "name":"学院c",
            "id":"c",
            "child":[
                {
                    "name":"请选择",
                    "id":"0"
                },
                {
                    "name":"系别c-a(没有第三级数据测试)",
                    "id":"a"
                },{
                    "name":"系别c-b(没有第三级数据测试)",
                    "id":"b"
                }
            ]
        },{
            "name":"学院d(没有第二级数据测试)",
            "id":"d"
        }
    ]
}
</script>
````

### placeholder 可选 - demo

````html
<form data-form-ajax="true"  action="/m/json/ok.json" method="post">


    <div
        class="mo-cascade"
        data-cascade-name="school"
        data-cascade-value=""
        data-cascade-options="#cascadeJSON2"
    ></div>

    <button type="submit" name="button">提交</button>
</form>
````
