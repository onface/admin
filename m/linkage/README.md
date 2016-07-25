# select 联动

````html
<script>
[
    {
        "name": "北京",
        "value": "1",
        "child": [
            {
                "name": "朝阳区",
                "value":"1-1",
                "child": [
                    {
                        "name": "黄泉路",
                        "value": "1-1"
                    }
                ]
            },
            {
                "name": "八宝山",
                "value":"1-2",
                "child": [
                    {
                        "name": "公墓",
                        "value":"1-2-1"
                    },
                    {
                        "name": "大门",
                        "value":"1-2-2"
                    }
                ]
            }
        ]
    },
    {
        "name": "上海",
        "value": "2",
        "child": [
            {
                "name": "黄埔区",
                "value": "2-1"
            },
            {
                "name": "虹口区",
                "value": "2-2",
                "child": [
                    {
                        "name": "武进路",
                        "value": "2-2-1"
                    },
                    {
                        "name": "四平路",
                        "value": "2-2-2"
                    }
                ]
            }
        ]
    }
]
</script>
<span class="mo-linkage" data-linkage-data='prev' ></span>
````
