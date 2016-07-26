# select 联动

````html
<script id="linkageJSON" type="text/json" >
[
    {
        "label": "北京",
        "value": "1",
        "children": [
            {
                "label": "朝阳区",
                "value":"1-1",
                "children": [
                    {
                        "label": "黄泉路",
                        "value": "1-1-1"
                    }
                ]
            },
            {
                "label": "八宝山",
                "value":"1-2",
                "children": [
                    {
                        "label": "公墓",
                        "value":"1-2-1"
                    },
                    {
                        "label": "大门",
                        "value":"1-2-2"
                    }
                ]
            }
        ]
    },
    {
        "label": "上海",
        "value": "2",
        "children": [
            {
                "label": "黄埔区",
                "value": "2-1",
                "children": [
                    {
                        "label": "abc",
                        "value": "2-1-1"
                    },
                    {
                        "label": "def",
                        "value": "2-1-2"
                    }
                ]
            },
            {
                "label": "虹口区",
                "value": "2-2",
                "children": [
                    {
                        "label": "武进路",
                        "value": "2-2-1"
                    },
                    {
                        "label": "四平路",
                        "value": "2-2-2"
                    }
                ]
            },
            {
                "label": "没有子元素",
                "value": "2-3"
            }
        ]
    }
]
</script>
<span class="mo-linkage"
    data-linkage-name="city"
    data-linkage-width="200"
    data-linkage-options='prev'
    data-linkage-placeholder="请选择城市"
     ></span>

     <br />

    <span class="mo-linkage"
    data-linkage-name="city"
    data-linkage-value="2|2-1|2-1-2"
    data-linkage-options='#linkageJSON'
    ></span>
    <br />
    this.props.linkageValue
         一定要是 <code>data-linkage-value='JSON'</code> 的格式
````

| 值 | 描述 |
|---|-----|
| name | 隐藏 input 的name值 |
| value | 选中项数据，通过 &#124; 连接 |
| width | input 的宽度 |
| options | 选项json， 当值为 `prev` 时选择上一个 `<script>` ，当值为选择器时选择选择器对应的数据


## 与 copy 结合

> 注意 `data-linkage-options` 用的是 `#linkageJSON`

````html
<form class="mo-form" data-form-ajax="true" action="/m/json/ok.json" method="get">
    <div id="linkagecopybox">
        <span id="linkClone" class="mo-linkage"
        data-linkage-name="city[]"
        data-linkage-options='#linkageJSON'
        data-linkage-placeholder="请选择城市"
         ></span>
    </div>
    <span class="mo-btn mo-copy" data-copy-target="#linkagecopybox" data-copy-clone="#linkClone">新建城市</span>
    <br>
    <br>
    <button class="mo-btn" type="submit">提交</button>
</form>
````
