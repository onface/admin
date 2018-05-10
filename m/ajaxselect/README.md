# ajaxselect

## 基础

````html
ok.json<select
    name="state"
    data-ajaxselect-url="./m/json/ok.json"
    data-ajaxselect-method="get"
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
err.json<select
    name="state"
    data-ajaxselect-url="./m/json/err.json"
    data-ajaxselect-method="get"
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
````

## confirm

````html
<select
    name="state"
    data-ajaxselect-url="./m/json/ok.json"
    data-ajaxselect-method="get"
    data-ajaxselect-confirm="确认修改状态为%text?"
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
````

## prompt & prompt{value}

`data-ajaxselect-prompt` 和 `data-ajaxselect-prompterror` 的格式可以为

```html
"error_msg|错误原因="
"error_msg|错误原因=管理员审核不通过"
"error_msg|错误原因=管理员审核不通过&degree|严重程度="
```

### 指定某一项目 prompt

prompt + 对应 value

````html
ok.json<select
    name="state"
    data-ajaxselect-url="./m/json/ok.json"
    data-ajaxselect-method="get"
    data-ajaxselect-confirm="确认修改状态为%text?"
    data-ajaxselect-prompterror="error_msg|错误原因="
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
err.json<select
    name="state"
    data-ajaxselect-url="./m/json/err.json"
    data-ajaxselect-method="get"
    data-ajaxselect-confirm="确认修改状态为%text?"
    data-ajaxselect-prompterror="error_msg|错误原因="
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
````

`data-ajaxselect-prompterror` 对应 `<option value="error">失败</option>` 被选择时的 prompt 内容

## 所有 prompt

````html
ok.json<select
    name="state"
    data-ajaxselect-url="./m/json/ok.json"
    data-ajaxselect-method="get"
    data-ajaxselect-confirm="确认修改状态为%text?"
    data-ajaxselect-prompt="error_msg|错误原因="
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
err.json<select
    name="state"
    data-ajaxselect-url="./m/json/err.json"
    data-ajaxselect-method="get"
    data-ajaxselect-confirm="确认修改状态为%text?"
    data-ajaxselect-prompt="error_msg|错误原因="
    >
    <option value="success">成功</option>
    <option value="error">失败</option>
    <option value="del">删除</option>
</select>
````


如果需要给每一项都增加 prompt 收集数据则使用 `data-ajaxselect-prompt="error_msg|失败原因=&demo="`
