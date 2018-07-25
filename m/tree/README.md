# tree


````html
<script id="treeJSON" type="text/json" >
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
<div
	data-tree-name="some"
	data-tree-options="prev"
 >
</div>

<div
    data-tree-name="edit"
    data-tree-options="#treeJSON"
    data-tree-value="2-2-2,1-2-2"
    data-tree-link-parent=false
    data-tree-link-child=false
 >
</div>
````
