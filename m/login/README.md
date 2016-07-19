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
    <form class="mo-login-form" data-ui="form" action="/login/" method="post">
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
            <!-- 务必给验证码加上时间戳 -->
            <img src="http://dummyimage.com/50x28?t=398217481274" alt="点击刷新" class="mo-login-item-code" />
        </div>
    </div>

    <div class="mo-login-drawer">
        <button class="mo-btn mo-btn mo-btn--success mo-btn--lg mo-login-btn" type="submit" >登录</button>
    </div>
    </form>
</div>
````
