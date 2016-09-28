# table


## 基础

````html
<div class="mo-box">
    <div class="mo-box-hd">
        提现申请管理
    </div>
    <div class="mo-box-bd">
        <!-- Start -->
        <div class="mo-tableScroll">
            <table class="mo-table">
                <thead>
                    <tr>
                        <th>
                            用户名
                        </th>
                        <th>
                            id
                        </th>
                        <th>
                            标题
                        </th>
                        <th>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            nimo
                        </td>
                        <td>
                            离离原上草，一岁一枯荣。
                        </td>
                        <td>
                            523623
                        </td>
                        <td>
                            <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                            <a class="mo-btn mo-btn--link">修改</a>
                            <button type="button" class="mo-btn mo-btn--success">登录</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            nimo
                        </td>
                        <td>
                            野火烧不尽，春风吹又生。
                        </td>
                        <td>
                            523623
                        </td>
                        <td>
                            <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                            <a class="mo-btn mo-btn--link">修改</a>
                            <button type="button" class="mo-btn mo-btn--success">登录</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- End -->
        <div class="mo-paging">
            <a href="#" class="mo-paging-prev">
                <i class="fa fa-angle-left" title="左三角形"></i> 上一页
            </a>
            <a href="#" class="mo-paging-item">1</a>
            <a href="#" class="mo-paging-item mo-paging-current">2</a>
            <a href="#" class="mo-paging-item">3</a>
            <a href="#" class="mo-paging-item">4</a>
            <a href="#" class="mo-paging-item">5</a>
            <a href="#" class="mo-paging-item">6</a>
            <a href="#" class="mo-paging-item">7</a>
            <span class="mo-paging-ellipsis">...</span>
            <a href="#" class="mo-paging-item">24</a>
            <a href="#" class="mo-paging-next">
                下一页 <i class="fa fa-angle-right" title="右三角形"></i>
            </a>
            <span class="mo-paging-info"><span class="mo-paging-bold">5/7</span>页</span>
        </div>
    </div>
</div>
````

## ajaxtable

````html
<div data-ajaxtable-url="/m/json/ajaxtable.json?type=1" ></div>
````

## 多行

> 使用 `<hr>` 作为换行符

````html
<div class="mo-box">
    <div class="mo-box-hd">
        提现申请管理
    </div>
    <div class="mo-box-bd">
        <!-- Start -->
        <div class="mo-tableScroll">
            <table class="mo-table">
                <thead>
                    <tr>
                        <th>
                            用户名
                            <hr>
                            邮址
                        </th>
                        <th>
                            id
                            <hr>
                            身份证
                        </th>
                        <th>
                            标题
                            <hr>
                            地址
                        </th>
                        <th>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            nimo
                            <hr>
                            email@qq.com
                        </td>
                        <td>
                            离离原上草，一岁一枯荣。
                            <hr>
                            340828199212192112
                        </td>
                        <td>
                            523623
                            <hr>
                            上海市虹口区武进路
                        </td>
                        <td>
                            <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                            <a class="mo-btn mo-btn--link">修改</a>
                            <button type="button" class="mo-btn mo-btn--success">登录</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            nimo
                            <hr>
                            email@qq.com
                        </td>
                        <td>
                            离离原上草，一岁一枯荣。
                            <hr>
                            340828199212192112
                        </td>
                        <td>
                            523623
                            <hr>
                            上海市虹口区武进路
                        </td>
                        <td>
                            <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                            <a class="mo-btn mo-btn--link">修改</a>
                            <button type="button" class="mo-btn mo-btn--success">登录</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- End -->
    </div>
</div>
````

## 通过 th 控制宽度

`th-1~20`

````html
<div class="mo-tableScroll">
    <table class="mo-table">
        <thead>
            <tr>
                <th>
                    姓名
                </th>
                <th  class="th-2">
                    年龄
                </th>
                <th class="th-18">
                    3333333--------------
                </th>
                <th class="th-8" >
                    444
                </th>
                <th>
                    5555555--------------
                </th>
                <th>
                    6666666--------------
                </th>
                <th>
                    7777777--------------
                </th>
                <th>
                    8888888--------------
                </th>
                <th>
                    9999999--------------
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    1111111
                </td>
                <td>
                    年龄
                </td>
                <td>
                    3333333--------------
                </td>
                <td>
                    444
                </td>
                <td>
                    5555555--------------
                </td>
                <td>
                    6666666--------------
                </td>
                <td>
                    7777777--------------
                </td>
                <td>
                    8888888--------------
                </td>
                <td>
                    9999999--------------
                </td>
            </tr>
        </tbody>
    </table>
</div>
````

## scroll 控制


````html
<!-- Start -->
<div class="mo-tableContoler">
    <span class="mo-tableContoler-left"></span>
    <span class="mo-tableContoler-right"></span>
    <div class="mo-tableScroll">
        <table class="mo-table">
            <thead>
                <tr>
                    <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th> 用户名 <hr> 邮址 </th> <th> id <hr> 身份证 </th> <th> 标题 <hr> 地址 </th> <th > 操作 </th>
                </tr>
            </thead>
            <tbody>
                <tr> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> nimo <hr> email@qq.com </td> <td> 离离原上草，一岁一枯荣。 <hr> 340828199212192112 </td> <td> 523623 <hr> 上海市虹口区武进路 </td> <td> <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a> <a class="mo-btn mo-btn--link">修改</a> <button type="button" class="mo-btn mo-btn--success">登录</button> </td> </tr>
            </tbody>
        </table>
    </div>
</div>
````
