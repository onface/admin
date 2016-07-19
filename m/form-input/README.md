# form

## 默认（上下 有标签）

````html
<div class="mo-form">
    <form  data-ui="form" action="/login/" method="post">
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
                <input type="text" class="mo-input" />
            </span>
        </div>
        <div class="mo-form-item">
            <button class="mo-btn mo-btn--info"> 提交</button>
        </div>
    </form>
</div>
````

## 横向 `mo-form--inline`

````html
<div class="mo-form mo-form--inline">
    <form class="" data-ui="form" action="/login/" method="post">
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
            <button class="mo-btn mo-btn--info fa fa-search mo-form-btn"></button>
        </div>
    </form>
</div>
````

## 两边对齐

````html
<div class="mo-form mo-form--level">
    <form class="" data-ui="form" action="/login/" method="post">
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
</div>
````
