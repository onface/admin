# grid

> 24格的栅格化

使用 `mo-grid` 包含 `mo-grid-数字` 组成布局。 `mo-grid-数字` 的数字只和需要等于 `24`。


## 1-24
````html
<div class="mo-grid">
    <div class="mo-grid-1">mo-grid-1</div><div class="mo-grid-23">mo-grid-23</div>
    <div class="mo-grid-2">mo-grid-2</div><div class="mo-grid-22">mo-grid-22</div>
    <div class="mo-grid-3">mo-grid-3</div><div class="mo-grid-21">mo-grid-21</div>
    <div class="mo-grid-4">mo-grid-4</div><div class="mo-grid-20">mo-grid-20</div>
    <div class="mo-grid-5">mo-grid-5</div><div class="mo-grid-19">mo-grid-19</div>
    <div class="mo-grid-6">mo-grid-6</div><div class="mo-grid-18">mo-grid-18</div>
    <div class="mo-grid-7">mo-grid-7</div><div class="mo-grid-17">mo-grid-17</div>
    <div class="mo-grid-8">mo-grid-8</div><div class="mo-grid-16">mo-grid-16</div>
    <div class="mo-grid-9">mo-grid-9</div><div class="mo-grid-15">mo-grid-15</div>
    <div class="mo-grid-10">mo-grid-10</div><div class="mo-grid-14">mo-grid-14</div>
    <div class="mo-grid-11">mo-grid-11</div><div class="mo-grid-13">mo-grid-13</div>
    <div class="mo-grid-12">mo-grid-12</div><div class="mo-grid-12">mo-grid-12</div>
    <div class="mo-grid-13">mo-grid-13</div><div class="mo-grid-11">mo-grid-11</div>
    <div class="mo-grid-14">mo-grid-14</div><div class="mo-grid-10">mo-grid-10</div>
    <div class="mo-grid-15">mo-grid-15</div><div class="mo-grid-9">mo-grid-9</div>
    <div class="mo-grid-16">mo-grid-16</div><div class="mo-grid-8">mo-grid-8</div>
    <div class="mo-grid-17">mo-grid-17</div><div class="mo-grid-7">mo-grid-7</div>
    <div class="mo-grid-18">mo-grid-18</div><div class="mo-grid-6">mo-grid-6</div>
    <div class="mo-grid-19">mo-grid-19</div><div class="mo-grid-5">mo-grid-5</div>
    <div class="mo-grid-20">mo-grid-20</div><div class="mo-grid-4">mo-grid-4</div>
    <div class="mo-grid-21">mo-grid-21</div><div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-22">mo-grid-22</div><div class="mo-grid-2">mo-grid-2</div>
    <div class="mo-grid-23">mo-grid-23</div><div class="mo-grid-1">mo-grid-1</div>
    <div class="mo-grid-24">mo-grid-24</div>
</div>
````
## 4 20
````html
<div class="mo-grid">
    <div class="mo-grid-4">mo-grid-4</div>
    <div class="mo-grid-20">mo-grid-20</div>
</div>
````

## 3 3 3 3 3 3 3 3
````html
<div class="mo-grid">
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
    <div class="mo-grid-3">mo-grid-3</div>
</div>
````

<style>
/* 用于演示的样式 */
.mo-grid-1,
.mo-grid-2,
.mo-grid-3,
.mo-grid-4,
.mo-grid-5,
.mo-grid-6,
.mo-grid-7,
.mo-grid-8,
.mo-grid-9,
.mo-grid-10,
.mo-grid-11,
.mo-grid-12,
.mo-grid-13,
.mo-grid-14,
.mo-grid-15,
.mo-grid-16,
.mo-grid-17,
.mo-grid-18,
.mo-grid-19,
.mo-grid-20,
.mo-grid-21,
.mo-grid-22,
.mo-grid-23,
.mo-grid-24 {
    margin-bottom: 5px;
    height: 20px;
    line-height:20px;
    color:white;
    font-size:12px;
}
.mo-grid-1,
.mo-grid-2,
.mo-grid-3,
.mo-grid-4,
.mo-grid-5,
.mo-grid-6,
.mo-grid-7,
.mo-grid-8,
.mo-grid-9,
.mo-grid-10,
.mo-grid-11,
.mo-grid-12 {
    background-color:#99CCFF;
    box-shadow:inset 0px 0px 5px #44a0fb;
}
.mo-grid-13,
.mo-grid-14,
.mo-grid-15,
.mo-grid-16,
.mo-grid-17,
.mo-grid-18,
.mo-grid-19,
.mo-grid-20,
.mo-grid-21,
.mo-grid-22,
.mo-grid-23,
.mo-grid-24  {
    background-color:#0099CC;
    box-shadow:inset 0px 0px 5px #0A6586;
}
</style>
