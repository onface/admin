# upload


<link rel="stylesheet" href="./index.less">

````html
<div class="mo-upload"
    data-upload-url="/m/json/ok-upload.json"
    data-upload-name="pic"
    data-upload-title="上传头像"
    data-upload-width="200"
    data-upload-height="200"
>
</div>
````

## 编辑状态

````html
<script type="text/json" >
{
    "id": "1",
    "src": "http://dummyimage.com/650x120/000/fff"
}
</script>
<div class="mo-upload"
    data-upload-url="/m/json/ok-upload.json"
    data-upload-name="pic"
    data-upload-value="prev"
    data-upload-max="4"
>
</div>
````

# 上传文件

````html
<script type="text/json" >
{
    "id": "1",
    "filename": "文件名.jpg"
}
</script>
<div class="mo-upload"
    data-upload-type="file" 
    data-upload-url="/m/json/ok-upload-file.json"
    data-upload-name="abc"
    data-upload-value="prev"
>
</div>
````


## 待开发的裁剪功能
```
data-upload-clip="true"
data-upload-clip-proportion="1:1"
data-upload-clip-proportion="false"
data-upload-clip-width="200"
data-upload-clip-height="200"
```
