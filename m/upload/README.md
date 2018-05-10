# upload


````html
<div
    data-upload-title="上传头像"
    data-upload-url="./m/json/ok-upload.json"
    data-upload-name="pic"
    data-upload-width="200"
    data-upload-height="200"
>
</div>
<div
    data-upload-title="上传文件"
    data-upload-type="file"
    data-upload-url="./m/json/ok-upload-file.json"
    data-upload-name="file"
    data-upload-width="200"
    data-upload-height="200"
>
</div>
<div class="mo-clear"></div>
````

## 编辑状态

````html

<script type="text/json" >
{
    "id": "1",
    "src": "http://dummyimage.com/650x120/000/fff"
}
</script>
<div
    data-upload-title="上传图片"
    data-upload-url="./m/json/ok-upload.json"
    data-upload-name="pic"
    data-upload-value="prev"
>
</div>
<script type="text/json" >
{
    "id": "1",
    "filename": "文件名.jpg"
}
</script>
<div
    data-upload-title="上传文件"
    data-upload-type="file"
    data-upload-url="./m/json/ok-upload-file.json"
    data-upload-name="file"
    data-upload-value="prev"
>
</div>
<div class="mo-clear"></div>
````

# 多图上传

````html
<form class="mo-form" data-form-ajax="true" action="./m/json/ok.json" method="get">
<div id="copyuploadbox" class="mo-clear" >
    <div  class="js-upload-clone"
        data-upload-url="./m/json/ok-upload.json"
        data-upload-name="pics[]"
    >
    </div>
</div>
<span class="mo-btn" data-copy-clone=".js-upload-clone:first" data-copy-target="#copyuploadbox">增加图片</span>
<hr>
<button type="submit" class="mo-btn mo-btn--info">提交</button>
</form>
````

## 多图上传最大限制

````html

<form class="mo-form" data-form-ajax="true" action="./m/json/ok.json" method="get">
<div id="max6box" class="mo-clear" >
    <div  class="js-max6-clone"
        data-upload-url="./m/json/ok-upload.json"
        data-upload-name="pics[]"
    >
    </div>
</div>
<span class="mo-btn" data-copy-clone=".js-max6-clone:first" data-copy-target="#max6box" data-copy-filter="filtermax6" >增加图片</span>
<script>
function filtermax6 ($clone) {
    var length = $('.js-max6-clone').length
    // 设置编号
    $clone.attr('data-upload-title', length + 1)
    if (length > 5) {
        alert('最多上传6张图')
        return false
    }
}
</script>
<hr>
<button type="submit" class="mo-btn mo-btn--info">提交</button>
</form>
````


## 待开发的裁剪功能
```
data-upload-clip="true"
data-upload-clip-proportion="1:1"
data-upload-clip-proportion="false"
data-upload-clip-width="200"
data-upload-clip-height="200"
```
