# dialog

## basic

````html
<table class="mo-table" >
    <tr>
        <td>
            <span class="mo-btn" data-dialog-title="Hello" data-dialog-content="closest&td&find&.js-html" >click</span>
            <script type="text/dialogtpl" class="js-html mo-hide" >
                <h1>123123123</h1>
                <div style="width:1000px;border:1px solid red;"  >box</div>
                <hr>
                <div data-ajaxtable-url="/m/json/ajaxtable.json?type=1" ></div>
            </script>
        </td>
    </tr>
</table>

<span class="mo-btn" data-dialog-title="Hello" data-dialog-content="#demotext" >click</span>
<script type="text/dialogtpl" id="demotext" class="mo-hide" >abc</script>



<span class="mo-btn" data-dialog-title="Hello" data-dialog-base64="true" data-dialog-content="#base64" >base64</span>
<script type="text/dialogtpl" id="base64" class="mo-hide" >PHA+YWFhYTxzdHJvbmc+MTExMTwvc3Ryb25nPjIyMjI8L3A+</script>
````

### render

````html
<span
    class="mo-btn"
    data-dialog-title="Hello"
    data-dialog-content="#renderdialog"
    data-dialog-render="@renderfn"
    data-dialog-user-renderdata=".js-data"
>click</span>
<script type="text/json" class="js-data" >
{
    "name": "nimo",
    "skills": ["html", "css", "js"]
}
</script>
<script type="text/javascript">
function renderfn (dialog) {
    console.log('renderfn')
    console.log(this, dialog)
    var json = this.next(this.data('dialogUserRenderdata')).html().trim()
    var data = JSON.parse(json)
    $(dialog).find('input').val(data.name)
}
</script>
<script type="text/dialogtpl" id="renderdialog" >
    abc
    <input type="text" />
</script>
````
