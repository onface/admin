# sort

````html
<div
	data-sort-id="id[]"
	data-sort-start-index="start_index"
	data-sort-url="/m/json/ok.json"
	 >
	 <!-- start_index 的值是当前显示的第一项的索引值 -->
	<input type="hidden" name="start_index" value="1"  />
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort"></span>
		a
		<input name="id[]" type="hidden" value="a" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort"></span>
		b
		<input name="id[]" type="hidden" value="b" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort"></span>
		c
		<input name="id[]" type="hidden" value="c" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-sort"></span>
		d
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
