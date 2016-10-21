# checkall

> data-checkall 选择器基于 [filter](../filter/README.md)

## ajax 删除

````html
<div class="mo-tableScroll">
    <table class="mo-table">
        <thead>
            <tr>
                <th>
                    <input data-checkall=".js-listcheck"  type="checkbox" />
                    <span class="mo-btn mo-btn--danger" data-ajax-url="/m/json/ok.json" data-ajax-checkbox=".js-listcheck:checked" data-ajax-remove=".js-listcheck:checked&closest&tr" >删除选中项目</span>
                </th>
                <th>
                    用户名
                </th>
                <th>
                    id
                </th>
                <th>
                    标题
                </th>
                <th>
                    操作
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" class="js-listcheck" name="id" value="1" />
                </td>
                <td>
                    nimo
                </td>
                <td>
                    离离原上草，一岁一枯荣。
                </td>
                <td>
                    523623
                </td>
                <td>
                    <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                    <a class="mo-btn mo-btn--link">修改</a>
                    <button type="button" class="mo-btn mo-btn--success">登录</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" class="js-listcheck" name="id" value="2" />
                </td>
                <td>
                    nimo
                </td>
                <td>
                    野火烧不尽，春风吹又生。
                </td>
                <td>
                    523623
                </td>
                <td>
                    <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                    <a class="mo-btn mo-btn--link">修改</a>
                    <button type="button" class="mo-btn mo-btn--success">登录</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
````
