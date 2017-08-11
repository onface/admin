# tab

````html
<div class="mo-box">
    <div class="mo-box-hd">
        Tab切换
    </div>
    <div class="mo-box-bd">

        <!-- Start -->

        <div class="mo-tab">
            <div class="mo-tab-hd">
                <span class="mo-tab-hd-trigger mo-tab-hd-trigger--on">A</span>
                <span class="mo-tab-hd-trigger">B</span>
                <span class="mo-tab-hd-trigger">C</span>
            </div>
            <div class="mo-tab-bd">
                <div class="mo-tab-bd-box mo-tab-bd-box--on">
                    aaa
                </div>
                <div class="mo-tab-bd-box">
                    bbb
                </div>
                <div class="mo-tab-bd-box">
                    ccc
                </div>
            </div>
        </div>


        <!-- End -->

    </div>
</div>
````


## 静态

> 没有切换功能，通过点击链接切换

````html
<div class="m-tab-static" >
    <div class="m-tab-static-hd">
        <a href="#" class="m-tab-static-hd-trigger m-tab-static-hd-trigger--on">
            概述
        </a>
        <a href="#" class="m-tab-static-hd-trigger">
            编辑
        </a>
        <a href="#" class="m-tab-static-hd-trigger">
            数据
        </a>
    </div>
    <div class="m-tab-static-box">
        some text
    </div>
</div>
````
