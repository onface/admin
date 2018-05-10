# calendar

<a href="./iframe.html">./iframe.html</a>

## 基础

````html
<div class="mo-calendar"
    data-ajaxcalendar-url="./m/json/ajaxcalendar.json"
    data-ajaxcalendar-method="get"
    data-checkin="2017-03-3,2017-03-6,2017-03-12,2017-03-21"
    data-date="2017-03"
>
</div>
````

```js
/m/json/ajaxcalendar.json
{
   "data": {
        "checkin": ["2017-03-5","2017-03-6","2017-03-11","2017-03-15"],
    }
}
```

## 详细

````html
<div class="mo-calendar"
    data-ajaxcalendar-url="./m/json/ajaxcalendar.json"
    data-ajaxcalendar-method="get"
    data-checkin="2017-03-10,2017-03-11,2017-03-14,2017-03-18,2017-03-21"
    data-date="2017-03"
    data-weekcolumn="F,S,S,M,T,W,T"
    data-weekday="5"
>
</div>
````


<!--
<iframe src="./iframe.html" width="100%" height="800" frameborder="0"></iframe>
-->
