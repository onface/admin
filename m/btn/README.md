# btn

<link rel="stylesheet" href="./index.less">


## a/span/button
````html
<a href="#" class="mo-btn">a.mo-btn</a>
<span href="#" class="mo-btn">span.mo-btn</span>
<button type="button" href="#" class="mo-btn">button.mo-btn</button>
````

## disabled

````html
<span class="mo-btn mo-btn--disabled" disabled="disabled">mo-btn--disabled</span>
````

## color

````html
<span class="mo-btn mo-btn--link" >mo-btn--link</span>
<span class="mo-btn mo-btn--text" >mo-btn--text</span>
<span class="mo-btn" >default</span>
````
````html
<span class="mo-btn mo-btn--primary" >mo-btn--primary</span>
<span class="mo-btn mo-btn--success" >mo-btn--success</span>
<span class="mo-btn mo-btn--info" >mo-btn--info</span>
<span class="mo-btn mo-btn--warning" >mo-btn--warning</span>
<span class="mo-btn mo-btn--danger" >mo-btn--danger</span>
````
````html
<span class="mo-btn mo-btn--primary2" >mo-btn--primary2</span>
<span class="mo-btn mo-btn--success2" >mo-btn--success2</span>
<span class="mo-btn mo-btn--info2" >mo-btn--info2</span>
<span class="mo-btn mo-btn--warning2" >mo-btn--warning2</span>
<span class="mo-btn mo-btn--danger2" >mo-btn--danger2</span>
````

## size

### span
````html
<span class="mo-btn" >default</span>
<span class="mo-btn mo-btn--1 mo-btn--primary" >mo-btn--1</span>
<span class="mo-btn mo-btn--2 mo-btn--success" >mo-btn--2</span>
<span class="mo-btn mo-btn--3 mo-btn--info" >mo-btn--3</span>
<span class="mo-btn mo-btn--4 mo-btn--warning" >mo-btn--4</span>
<span class="mo-btn mo-btn--5 mo-btn--danger" >mo-btn--5</span>
<span class="mo-btn mo-btn--6 mo-btn--primary" >mo-btn--6</span>
<span class="mo-btn mo-btn--7 mo-btn--success" >mo-btn--7</span>
<span class="mo-btn mo-btn--8 mo-btn--info" >mo-btn--8</span>
<span class="mo-btn mo-btn--9 mo-btn--warning" >mo-btn--9</span>
<span class="mo-btn mo-btn--10 mo-btn--danger" >mo-btn--10</span>
<span class="mo-btn mo-btn--11 mo-btn--primary" >mo-btn--11</span>
<span class="mo-btn mo-btn--12 mo-btn--success" >mo-btn--12</span>
<span class="mo-btn mo-btn--13 mo-btn--info" >mo-btn--13</span>
<span class="mo-btn mo-btn--14 mo-btn--warning" >mo-btn--14</span>
````

### a
````html
<a href="#" class="mo-btn" >default</a>
<a href="#" class="mo-btn mo-btn--1" >mo-btn--1</a>
<a href="#" class="mo-btn mo-btn--2" >mo-btn--2</a>
<a href="#" class="mo-btn mo-btn--3" >mo-btn--3</a>
<a href="#" class="mo-btn mo-btn--4" >mo-btn--4</a>
<a href="#" class="mo-btn mo-btn--5" >mo-btn--5</a>
<a href="#" class="mo-btn mo-btn--6" >mo-btn--6</a>
<a href="#" class="mo-btn mo-btn--7" >mo-btn--7</a>
<a href="#" class="mo-btn mo-btn--8" >mo-btn--8</a>
<a href="#" class="mo-btn mo-btn--9" >mo-btn--9</a>
<a href="#" class="mo-btn mo-btn--10" >mo-btn--10</a>
<a href="#" class="mo-btn mo-btn--11" >mo-btn--11</a>
<a href="#" class="mo-btn mo-btn--12" >mo-btn--12</a>
<a href="#" class="mo-btn mo-btn--13" >mo-btn--13</a>
<a href="#" class="mo-btn mo-btn--14" >mo-btn--14</a>
````
### button
````html
<button type="button" class="mo-btn" >default</button>
<button type="button" class="mo-btn mo-btn--1" >mo-btn--1</button>
<button type="button" class="mo-btn mo-btn--2" >mo-btn--2</button>
<button type="button" class="mo-btn mo-btn--3" >mo-btn--3</button>
<button type="button" class="mo-btn mo-btn--4" >mo-btn--4</button>
<button type="button" class="mo-btn mo-btn--5" >mo-btn--5</button>
<button type="button" class="mo-btn mo-btn--6" >mo-btn--6</button>
<button type="button" class="mo-btn mo-btn--7" >mo-btn--7</button>
<button type="button" class="mo-btn mo-btn--8" >mo-btn--8</button>
<button type="button" class="mo-btn mo-btn--9" >mo-btn--9</button>
<button type="button" class="mo-btn mo-btn--10" >mo-btn--10</button>
<button type="button" class="mo-btn mo-btn--11" >mo-btn--11</button>
<button type="button" class="mo-btn mo-btn--12" >mo-btn--12</button>
<button type="button" class="mo-btn mo-btn--13" >mo-btn--13</button>
<button type="button" class="mo-btn mo-btn--14" >mo-btn--14</button>
````

### icon

> .mo-btn-icon 默认是第一个子元素

````html
<span class="mo-btn mo-btn--7"><span class="mo-btn-icon">&hearts;</span>default</span>
<span class="mo-btn mo-btn--7 mo-btn--info"><span class="mo-btn-icon">&hearts;</span>default</span>
````
> 如果 .mo-btn-icon 是最后一个子元素应该加上 mo-btn-icon--before

````html
<span class="mo-btn mo-btn--7">before<span class="mo-btn-icon mo-btn-icon--before">×</span></span>
<span class="mo-btn mo-btn--7 mo-btn--danger">before<span class="mo-btn-icon mo-btn-icon--before">×</span></span>
````

### loading

````html
<span class="mo-btn mo-btn--loading mo-btn--1 mo-btn--primary" >mo-btn--1</span>
<span class="mo-btn mo-btn--loading mo-btn--2 mo-btn--success" >mo-btn--2</span>
<span class="mo-btn mo-btn--loading mo-btn--3 mo-btn--info" >mo-btn--3</span>
<span class="mo-btn mo-btn--loading mo-btn--4 mo-btn--warning" >mo-btn--4</span>
<span class="mo-btn mo-btn--loading mo-btn--5 mo-btn--danger" >mo-btn--5</span>
<span class="mo-btn mo-btn--loading mo-btn--6 mo-btn--primary2" >mo-btn--6</span>
<span class="mo-btn mo-btn--loading mo-btn--7 mo-btn--success2" >mo-btn--7</span>
<span class="mo-btn mo-btn--loading mo-btn--8 mo-btn--info2" >mo-btn--8</span>
<span class="mo-btn mo-btn--loading mo-btn--9 mo-btn--warning2" >mo-btn--9</span>
<span class="mo-btn mo-btn--loading mo-btn--10 mo-btn--danger2" >mo-btn--10</span>
<span class="mo-btn mo-btn--loading mo-btn--11 mo-btn--primary" >mo-btn--11</span>
<span class="mo-btn mo-btn--loading mo-btn--12 mo-btn--success" >mo-btn--12</span>
<span class="mo-btn mo-btn--loading mo-btn--13 mo-btn--info" >mo-btn--13</span>
<span class="mo-btn mo-btn--loading mo-btn--14 mo-btn--warning" >mo-btn--14</span>
````
