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
                        <th class="mo-hide">
                            用户名
                        </th>
                        <th class="mo-hide">
                            id
                        </th>
                        <th class="mo-hide">
                            标题
                        </th>
                        <th class="mo-hide">
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="mo-hide">
                            nimo
                        </td>
                        <td class="mo-hide">
                            离离原上草，一岁一枯荣。
                        </td>
                        <td class="mo-hide">
                            523623
                        </td>
                        <td class="mo-hide">
                            <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                            <a class="mo-btn mo-btn--link">修改</a>
                            <button type="button" class="mo-btn mo-btn--success">登录</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="mo-hide">
                            nimo
                        </td>
                        <td class="mo-hide">
                            野火烧不尽，春风吹又生。
                        </td>
                        <td class="mo-hide">
                            523623
                        </td>
                        <td class="mo-hide">
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
<div data-ajaxtable-url="./m/json/ajaxtable.json?type=1" ></div>
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

## 信息


````html
<table class="mo-table-info">
    <tbody>
        <tr>
            <td class="mo-table-info-F-label" >
                编号
            </td>
            <td>
                XJD_2321
            </td>
            <td class="mo-table-info-F-label" >
                手机号
            </td>
            <td>
                2312312
            </td>
            <td class="mo-table-info-F-label" >
                借款人
            </td>
            <td>
                21421512
            </td>
        </tr>
        <tr>
            <td class="mo-table-info-F-label" >
                借款金额
            </td>
            <td>
                123,23123
            </td>
            <td class="mo-table-info-F-label" >
                利息
            </td>
            <td>
                122
            </td>
            <td class="mo-table-info-F-label" >
                管理费
            </td>
            <td>
                8
            </td>
        </tr>
        <tr>
            <td class="mo-table-info-F-label" >
                信审费
            </td>
            <td>
                123,23123
            </td>
            <td class="mo-table-info-F-label" >
                优惠券
            </td>
            <td>
                122
            </td>
            <td class="mo-table-info-F-label" >
                预期时间
            </td>
            <td>
                8
            </td>
        </tr>
    </tbody>
</table>
````

## 控制显示列

````html
<table class="mo-table">
    <thead>
        <tr>
            <th>
                <i
                    class="fa fa-ellipsis-h mo-table-column"
                    id="mo-table-column-2"
                    data-show-column-index='0,2,4' 
                ></i>
            </th>
            <th class="mo-hide">
                用户名
            </th>
            <th class="mo-hide">
                id
            </th>
            <th class="mo-hide">
                标题
            </th>
            <th class="mo-hide">
                操作
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                1
            </td>
            <td class="mo-hide">
                nimo
            </td>
            <td class="mo-hide">
                离离原上草，一岁一枯荣。
            </td>
            <td class="mo-hide">
                523623
            </td>
            <td class="mo-hide">
                <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                <a class="mo-btn mo-btn--link">修改</a>
                <button type="button" class="mo-btn mo-btn--success">登录</button>
            </td>
        </tr>
        <tr>
            <td>
                2
            </td>
            <td class="mo-hide">
                nimo
            </td>
            <td class="mo-hide">
                野火烧不尽，春风吹又生。
            </td>
            <td class="mo-hide">
                523623
            </td>
            <td class="mo-hide">
                <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                <a class="mo-btn mo-btn--link">修改</a>
                <button type="button" class="mo-btn mo-btn--success">登录</button>
            </td>
        </tr>
    </tbody>
</table>
````

## 控制显示列 - 组合弹框

````html
<table class="mo-table">
    <thead>
        <tr>
            <th>
                <i
                    class="fa fa-ellipsis-h mo-table-column"
                    id="mo-table-column-3"
                    data-show-column-index='0,4' 

                    data-dialog-title="显示表头列" 
                    data-dialog-content="closest&th&find&.js-html"
                ></i>
                <script type="text/dialogtpl" class="js-html mo-hide" >
                    <form onsubmit="return false">
                        <label class="mo-hide">
                            <input type="checkbox" name="column" value="0" checked/>
                        </label>
                        <label>
                            <input type="checkbox" name="column" value="1" />
                            用户名
                        </label><br/>
                        <label>
                            <input type="checkbox" name="column" value="2" />
                            id
                        </label><br/>
                        <label>
                            <input type="checkbox" name="column" value="3" />
                            标题
                        </label><br/>
                        <label class="mo-hide">
                            <input type="checkbox" name="column" value="4" checked />
                            操作
                        </label>
                        <button
                            class="mo-table-column-submit"
                            data-id="mo-table-column-3" 
                        >确定</button>
                    </form>
                </script>
            </th>
            <th class="mo-hide">
                用户名
            </th>
            <th class="mo-hide">
                id
            </th>
            <th class="mo-hide">
                标题
            </th>
            <th class="mo-hide">
                操作
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            </td>
            <td class="mo-hide">
                nimo
            </td>
            <td class="mo-hide">
                离离原上草，一岁一枯荣。
            </td>
            <td class="mo-hide">
                523623
            </td>
            <td class="mo-hide">
                <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                <a class="mo-btn mo-btn--link">修改</a>
                <button type="button" class="mo-btn mo-btn--success">登录</button>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td class="mo-hide">
                nimo
            </td>
            <td class="mo-hide">
                野火烧不尽，春风吹又生。
            </td>
            <td class="mo-hide">
                523623
            </td>
            <td class="mo-hide">
                <a class="mo-btn mo-btn--link"><i class="fa fa-edit"></i>编辑</a>
                <a class="mo-btn mo-btn--link">修改</a>
                <button type="button" class="mo-btn mo-btn--success">登录</button>
            </td>
        </tr>
    </tbody>
</table>
````