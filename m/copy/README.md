# copy

````html
<div class="js-copy1" >
    <h4>步骤</h4>
    <input type="text" name="step[]" />
</div>
<div id="box" >
</div>
<span class="mo-btn" data-copy-clone=".js-copy1:first" data-copy-target="#box" >新建步骤</span>
````
| data-copy-clone | 复制的元素 |
| data-copy-target | 复制元素新位置 |

## filter

````html
<div class="js-copy2" >
    <h4>步骤<span class="js-copy2-number" >1</span></h4>
    <input type="text" name="step[]" />
</div>
<div id="box2" >
</div>
<span class="mo-btn" data-copy-clone=".js-copy2:first" data-copy-target="#box2" data-copy-filter="copy2filter" >新建步骤</span>
<script type="text/javascript">
function copy2filter ($clone) {
    var length = $('.js-copy2').length
    var copy2filterCount = length + 1
    if (length > 4) {
        alert('最多不能超过5步骤')
        return false
    }
    $clone.find('.js-copy2-number').html(copy2filterCount)
}
</script>
````

## method

````html
<div id="box3" >
    <div class="js-copy3" >
        <h4>步骤</h4>
        <input type="text" name="step[]" />
    </div>
</div>
<span class="mo-btn" data-copy-clone=".js-copy3" data-copy-target="#box3" data-copy-method="prepend"  >新建步骤</span>
````

`method: append | prepend`
