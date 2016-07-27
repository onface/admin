# form


## ajax form

加上 `data-form-ajax="true"` 后表单会变成 ajax 提交

### ajax-成功
````html

<form class="mo-form"  method="get" action="/m/json/ok.json" data-form-ajax="true" >
    <div class="mo-form-title">success</div>
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

### ajax-错误

````html
<form class="mo-form" method="get" action="/m/json/err.json" data-form-ajax="true" >
    <div class="mo-form-title">error</div>
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

### ajax-跳转

如果AJAX返回的 JSON 存在 `data.href` ，则成功后会跳转到。即使 `status` 是 `error` 也会跳转

**/m/json/ok-href.json**
```js
{
    "status": "success",
    "data": {
        "href": "/"
    }
}
```

````html
<form class="mo-form" method="get" action="/m/json/ok-href.json" data-form-ajax="true" data-form-timeout="2000" >
    <div class="mo-form-title">href</div>
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

### timeout

```js
// /m/json/ok-href-timeout.json
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
<form class="mo-form" method="get" action="/m/json/ok-href-timeout.json" data-form-ajax="true" data-form-timeout="2000" >
    <div class="mo-form-title">timeout</div>
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


## 默认（上下 有标签）

````html
<div class="mo-box">
    <div class="mo-box-hd">
        <i class="mo-box-hd-icon fa fa-edit"></i>
        提现申请管理
        <span class="mo-box-hd-close fa fa-chevron-down"></span>
    </div>
    <div class="mo-box-bd">

        <!-- Start -->

        <form class="mo-form" action="/login/" method="post">
            <div class="mo-form-title">标题</div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">text</span>
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="输入用户名／邮箱">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">checkbox</span>
                <span class="mo-form-item-form">
                    <label class="mo-label" >a张三<input type="checkbox"  class="mo-input" /></label>
                    <label class="mo-label" >b李四<input type="checkbox" class="mo-input" /></label>
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">radio</span>
                <span class="mo-form-item-form">
                    <label class="mo-label" >a张三<input type="radio" name="radio1"  class="mo-input" /></label>
                    <label class="mo-label" >b李四<input type="radio" name="radio1" class="mo-input" /></label>
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">select</span>
                <span class="mo-form-item-form">
                    <select class="mo-select" name="">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </select>
                </span>
            </div>
            <div class="mo-form-item">
                <button class="mo-btn mo-btn--info"> 提交</button>
            </div>
        </form>

        <!-- End -->

    </div>
</div>
````

## 横向 `mo-form--inline`

````html
<div class="mo-box">
    <div class="mo-box-hd">
        <i class="mo-box-hd-icon fa fa-edit"></i>
        提现申请管理
        <span class="mo-box-hd-close fa fa-chevron-down"></span>
    </div>
    <div class="mo-box-bd">

        <!-- Start -->

        <form  class="mo-form mo-form--inline" action="/login/" method="post">
            <div class="mo-form-item">
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="输入用户名／邮箱">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-form mo-form-item-form--lg">
                    <input type="text" class="mo-input" placeholder="用户QQ/公司/任务ID/接口ID">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="注册时间">
                </span>
            </div>
            <div class="mo-form-item">
                <button class="mo-btn mo-btn--info mo-form-btn"><span class="fa fa-search" ></span></button>
            </div>
        </form>

        <!-- End -->

</div>
</div>
````

## 两边对齐 mo-form--level

````html
<div class="mo-box">
    <div class="mo-box-hd">
        <i class="mo-box-hd-icon fa fa-edit"></i>
        提现申请管理
        <span class="mo-box-hd-close fa fa-chevron-down"></span>
    </div>
    <div class="mo-box-bd">

        <!-- Start -->

        <form class="mo-form mo-form--level" action="/login/" method="post">
            <div class="mo-form-title">两边对齐</div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">user</span>
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="输入用户名／邮箱">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">user</span>
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="用户QQ/公司/任务ID/接口ID">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label">user</span>
                <span class="mo-form-item-form">
                    <input type="text" class="mo-input" placeholder="注册时间">
                </span>
            </div>
            <div class="mo-form-item">
                <span class="mo-form-item-label"></span>
                <span class="mo-form-item-form">
                    <button class="mo-btn mo-btn--info">提交</button>
                </span>
            </div>
        </form>

        <!-- End -->

</div>
</div>
````
