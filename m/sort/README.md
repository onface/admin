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
		<span class="mo-sort-handle fa fa-arrows"></span>
		a
		<input name="id[]" type="hidden" value="a" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-arrows"></span>
		b
		<input name="id[]" type="hidden" value="b" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-arrows"></span>
		c
		<input name="id[]" type="hidden" value="c" />
	</div>
	<div class="item" >
		<span class="mo-sort-handle fa fa-arrows"></span>
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
.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}
````
