# paging 分页

## 完整示例

````html
<div class="mo-paging">
    <a href="#" class="mo-paging-prev">
        <i class="fa fa-angle-left" title="左三角形"></i> 上一页
    </a>
    <a href="#" class="mo-paging-item">1</a>
    <a href="#" class="mo-paging-item mo-paging-current">2</a>
    <a href="#" class="mo-paging-item">3</a>
    <a href="#" class="mo-paging-item">4</a>
    <a href="#" class="mo-paging-item">5</a>
    <a href="#" class="mo-paging-item">6</a>
    <a href="#" class="mo-paging-item">7</a>
    <span class="mo-paging-ellipsis">...</span>
    <a href="#" class="mo-paging-item">24</a>
    <a href="#" class="mo-paging-next">
        下一页 <i class="fa fa-angle-right" title="右三角形"></i>
    </a>
    <span class="mo-paging-info"><span class="mo-paging-bold">5/7</span>页</span>
    <span class="mo-paging-which"><input name="some_name" value="6" type="text"></span>
    <a class="mo-paging-info mo-paging-goto" href="#">跳转</a>
</div>
````

## 上下页（首页）

````html
<div class="mo-paging">
    <span class="mo-paging-info">第<span class="mo-paging-bold">1/7</span>页</span>
    <span class="mo-paging-prev">
        <i class="fa fa-angle-left" title="左三角形"></i> 上一页
    </span>
    <a href="#" class="mo-paging-next">
        下一页 <i class="fa fa-angle-right" title="右三角形"></i>
    </a>
</div>
````

## 上下页（中间）

````html
<div class="mo-paging">
    <span class="mo-paging-info">第<span class="mo-paging-bold">5/7</span>页</span>
    <a href="#" class="mo-paging-prev">
        <i class="fa fa-angle-left" title="左三角形"></i> 上一页
    </a>
    <a href="#" class="mo-paging-next">
        下一页 <i class="fa fa-angle-right" title="右三角形"></i>
    </a>
</div>
````

## 上下页（末页）

````html
<div class="mo-paging">
    <span class="mo-paging-info">第<span class="mo-paging-bold">7/7</span>页</span>
    <a href="#" class="mo-paging-prev">
        <i class="fa fa-angle-left" title="左三角形"></i> 上一页
    </a>
    <span class="mo-paging-next">
        下一页 <i class="fa fa-angle-right" title="右三角形"></i>
    </span>
</div>
````