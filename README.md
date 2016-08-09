# fast-admin



> 给后端程序员使用的 `data-api` 管理后台框架


## data-ajax

````html
<span class="mo-btn mo-btn--info" data-ajax-url="/m/json/ok.json" data-ajax-data="id=2&type=del" data-ajax-method="post" >审核通过</span>
````

## data-form

````html
<form class="mo-form"  method="get" action="/m/json/ok.json" data-form-ajax="true" >
    <div class="mo-form-item">
        <span class="mo-form-item-label">text</span>
        <span class="mo-form-item-form">
            <input type="text" name="user" class="mo-input" placeholder="输入用户名／邮箱">
        </span>
    </div>
    <div class="mo-form-item">
        <button class="mo-btn mo-btn--info"> 提交</button>
    </div>
</form>
````

## data-upload

````html
<div
    data-upload-url="/m/json/ok-upload.json"
    data-upload-name="pic"
    data-upload-title="上传头像"
    data-upload-width="200"
    data-upload-height="200"
>
</div>
````

## data-linkage

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

````html
<!-- 为了方便预览隐藏了 script#linkageJSON  -->
<span
    data-linkage-name="city"
    data-linkage-width="200"
    data-linkage-options='#linkageJSON'
    data-linkage-placeholder="请选择城市"
></span>
````

## data-copy

````html
<form class="mo-form"  method="get" action="/m/json/ok.json" data-form-ajax="true" >
    <div class="mo-form-item js-copydemo1"  >
        <span class="mo-form-item-label">email</span>
        <span class="mo-form-item-form">
            <input type="text" name="email[]" class="mo-input" placeholder="输入邮箱">
        </span>
    </div>
    <div class="mo-form-item" id="copytarget1">
        <span class="mo-btn" data-copy-clone=".js-copydemo1:first" data-copy-target="#copytarget1" data-copy-method="before" > 新增邮箱</span>
    </div>
    <div class="mo-form-item">
        <button class="mo-btn mo-btn--info"> 提交</button>
    </div>
</form>
````

> 全站使用 font-awesome 4.4.0 作为图标库，字体索引： http://font-awesome.nimojs.com/icons/

````html
<i class="fa fa-user"></i><i class="fa fa-edit"></i>
````

- [登录](./m/login/README.md)
- [布局1](./m/1/README.md)
- [布局2](./m/2/README.md)
- [按钮](./m/btn/README.md)
- [盒子](./m/box/README.md)
- [列表](./m/table/README.md)
- [表单](./m/form-input/README.md)
- [ajax](./m/ajax/README.md)
- [复制组件](./m/copy/README.md)
- [层级选择](./m/linkage/README.md)
- [图片上传](./m/upload/README.md)
- [提示条](./m/alert/README.md)
- [提示框](./m/tipbox/README.md)
