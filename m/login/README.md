# login


```js
// 成功返回
{
    status: 'success',
    data: {
        href: '/index/?将要跳转的地址'
    }
}
// 失败返回
{
    status: 'error',
    msg: '登录失败原因'
}
```

````html
<div class="mo-login">
    <form class="mo-login-form mo-form" data-form-ajax="true"  action="/m/json/ok-href.json" method="get">
    <div class="mo-login-title">后台管理</div>

    <div class="mo-login-item">
        <span class="mo-login-item-label">
            <span class="fa fa-user"></span>
        </span>
        <div class="mo-login-item-form">
            <input type="text" name="user" class="mo-login-item-form-input" required  placeholder="请输入您的用户名">
        </div>
    </div>

    <div class="mo-login-item">
        <span class="mo-login-item-label">
            <span class="fa fa-lock"></span>
        </span>
        <div class="mo-login-item-form">
            <input type="password" name="pwd" class="mo-login-item-form-input" required placeholder="请输入您的密码">
        </div>
    </div>

    <div class="mo-login-item">
        <span class="mo-login-item-label">
            <span class="fa fa-shield"></span>
        </span>
        <div class="mo-login-item-form">
            <input type="text" class="mo-login-item-form-input" name="code" required placeholder="请输入右侧验证码">
            <img data-login-verify-src="/verify/" alt="点击刷新" class="mo-login-item-code" />
        </div>
    </div>

    <div class="mo-login-drawer">
        <button class="mo-btn mo-btn mo-btn--success mo-btn--lg mo-login-btn" type="submit" >登录</button>
    </div>
    </form>
</div>
````
