# calendar

<a href="./iframe.html">./iframe.html</a>

## 基础

````html
<div class="mo-calendar"
    data-ajaxcalendar-url="/m/json/ajaxcalendar.json"
    data-ajaxcalendar-method="get"
    data-checkin="3,6,12,21"
    data-date="2017-03"
>
</div>
````

```js
/m/json/ajaxcalendar.json
{
   "data": {
        "checkin": ["5","6","11","15"],
    }
}
```

## 详细

````html
<div class="mo-calendar"
    data-ajaxcalendar-url="/m/json/ajaxcalendar.json"
    data-ajaxcalendar-method="get"
    data-checkin="10,11,14,18,21"
    data-date="2017-03"
    data-weekcolumn="F,S,S,M,T,W,T"
    data-weekday="5"
>
</div>
````


<!--
<iframe src="./iframe.html" width="100%" height="800" frameborder="0"></iframe>
-->