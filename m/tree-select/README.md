# tree select

````html
<script id="tsJSON" type="text/json">
[
    {
        "label": "a",
        "value": "1",
        "children": [
            {
                "label": "a-a",
                "value":"1-1",
                "children": [
                    {
                        "label": "a-a-a",
                        "value": "1-1-1"
                    }
                ]
            },
            {
                "label": "a-b",
                "value":"1-2",
                "children": [
                    {
                        "label": "a-b-a",
                        "value":"1-2-1"
                    },
                    {
                        "label": "a-b-b",
                        "value":"1-2-2"
                    }
                ]
            }
        ]
    },
    {
        "label": "b",
        "value": "2",
        "children": [
            {
                "label": "b-a",
                "value": "2-1",
                "children": [
                    {
                        "label": "b-a-a",
                        "value": "2-1-1"
                    },
                    {
                        "label": "b-a-b",
                        "value": "2-1-2"
                    }
                ]
            },
            {
                "label": "b-b",
                "value": "2-2",
                "children": [
                    {
                        "label": "b-b-a",
                        "value": "2-2-1"
                    },
                    {
                        "label": "b-b-b",
                        "value": "2-2-2"
                    },
                    {
                        "label": "b-b-d",
                        "value": "2-2-3"
                    },
                    {
                        "label": "b-b-d",
                        "value": "2-2-4"
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
<span
    data-ts-name="some"
    data-ts-options="prev"
></span>
<br>
<span
    data-ts-name="someedit"
    data-ts-value="2-1,2-2"
    data-ts-options="#tsJSON"
></span>
<br>
<span
    data-ts-name="someedit"
    data-ts-value="2-1,2-2"
    data-ts-width="500"
    data-ts-options="#tsJSON"
></span>
````
