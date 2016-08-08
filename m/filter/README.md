# filter

filter 是通用模块，用于根据字符串查找元素

## 指定 id

````html
<div id="demo1">#demo1</div>
<span class="mo-btn" 
	data-ajax-url="/m/json/ok.json"
	data-ajax-remove="#demo1"
	>
	remove
</span>
````

## 父级标签

````html
1
<div class="js-demo" >
	demo
	<span class="mo-btn" 
		data-ajax-url="/m/json/ok.json"
		data-ajax-remove="closest&.js-demo"
		>
		remove
	</span>
</div>
2
````
## prev

prev 会查找上一个 script，一般用于查找JSON配置的 script ,一般不用于删除操作。


````html
<script style="display:block;">{"name":"script"}</script>
<span class="mo-btn" 
		data-ajax-url="/m/json/ok.json"
		data-ajax-remove="prev"
		>
		remove
	</span>
````

## 基于函数

````html
<div class="js-demoprev" >demo prev</div>
<div class="js-demo" >
	demo
	<span class="mo-btn" 
		data-ajax-url="/m/json/ok.json"
		data-ajax-remove="@filter1"
		>
		remove
	</span>
</div>
<script type="text/javascript">
function filter1 () {
	return $(this).closest('.js-demo').prev('.js-demoprev')
}
</script>
````