# sort

````html
<div
	data-sort-id="id[]"
	data-sort-start-index="1"
	data-sort-url="/m/json/ok.json"
	 >
	 <!-- start_index 的值是当前显示的第一项的索引值 -->
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span>
		1
		<input name="id[]" type="hidden" value="a" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span>
		2
		<input name="id[]" type="hidden" value="b" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span>
		3
		<input name="id[]" type="hidden" value="c" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span>
		4
		<input name="id[]" type="hidden" value="d" />
	</div>
</div>
````

````css
.item {
	border:2px solid #ABCDEF;
	padding:20px;
	width:400px;
}
````


````html
<table class="mo-table">
    <thead>
        <tr>
        	<th>排序</th>
            <th>
                用户名
            </th>
            <th>
                id
            </th>
            <th>
                操作
            </th>
        </tr>
    </thead>
    <tbody

    data-sort-id="id[]"
	data-sort-start-index="1"
	data-sort-url="/m/json/ok.json"

    >
        <tr>
        	<td><span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span></td>
            <td>
                1
                <input name="id[]" type="hidden" value="a" />
            </td>
            <td>
                523623
            </td>
            <td>
                <a class="mo-btn mo-btn--link"><i class="fa fa-edit" ></i>编辑</a>
                <a class="mo-btn mo-btn--link">修改</a>
                <button type="button" class="mo-btn mo-btn--success">登录</button>
            </td>
        </tr>
        <tr>
        	<td><span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span></td>
            <td>
                2
                <input name="id[]" type="hidden" value="b" />
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
        	<td><span class="mo-sort-handle fa fa-sort" style="font-size:1.5em;"></span></td>
            <td>
                3
                <input name="id[]" type="hidden" value="c" />
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
````