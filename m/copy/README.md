# copy

````html
<div id="copy1" >
    <h4>步骤</h4>
    <input type="text" name="step[]" />
</div>
<div id="box" >
</div>
<span class="mo-clone mo-btn" data-copy-clone="#copy1" data-copy-target="#box" >新建步骤</span>
````
| data-copy-clone | 复制的元素 |
| data-copy-target | 复制元素新位置 |

## filter

````html
<div id="copy2" >
    <h4>步骤<span class="js-copy2-number" >1</span></h4>
    <input type="text" name="step[]" />
</div>
<div id="box2" >
</div>
<span class="mo-clone mo-btn" data-copy-clone="#copy2" data-copy-target="#box2" data-copy-filter="copy2filter" >新建步骤</span>
<script type="text/javascript">
var copy2filterCount = 1
function copy2filter ($clone) {
    copy2filterCount = copy2filterCount + 1
    $clone.find('.js-copy2-number').html(copy2filterCount)
}
</script>
````

## method

````html
<div id="box3" >
    <div id="copy3" >
        <h4>步骤<span class="js-copy3-number" >1</span></h4>
        <input type="text" name="step[]" />
    </div>
</div>
<span class="mo-clone mo-btn" data-copy-clone="#copy3" data-copy-target="#box3" data-copy-method="prepend" data-copy-filter="copy3filter" >新建步骤</span>
<script type="text/javascript">
var copy3filterCount = 1
function copy3filter ($clone) {
    copy3filterCount = copy3filterCount + 1
    $clone.find('.js-copy3-number').html(copy3filterCount)
}
</script>
````
