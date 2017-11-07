var $ = require('jquery')
$(function () {
    $('body').on('click', '.mo-tableContoler-left', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-tableContoler')
        var $scroll = $parent.find('.mo-tableScroll,mo-tablescroll')
        $scroll.animate({
            scrollLeft: $scroll.scrollLeft() - 300 || 0
        })
    })
    $('body').on('click', '.mo-tableContoler-right', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-tableContoler')
        var $scroll = $parent.find('.mo-tableScroll,mo-tablescroll')
        $scroll.animate({
            scrollLeft: $scroll.scrollLeft() + 300
        })
    })

    var toggleTableShow = function ($table , showColumnIndexArray){
        // console.log('toggleTableShow : ',showColumnIndexArray)
        $table.find('thead tr').find('th').each(function(){
            if(showColumnIndexArray.indexOf(String($(this).index())) != -1 ){
                $(this).removeClass('mo-hide')
            }else{
                $(this).addClass('mo-hide')
            }
        })
        $table.find('tbody tr').each(function(){
            $(this).find('td').each(function(){
                if(showColumnIndexArray.indexOf(String($(this).index())) != -1 ){
                    $(this).removeClass('mo-hide')
                }else{
                    $(this).addClass('mo-hide')
                }
            })
        })
    }

    $('.mo-table-column').each(function () {
        let $this = $(this)
        let data = $this.data()
            data.id = $this.attr('id')
        // console.log('.mo-table-column data : ',data)
        /* data {
            id : 'name' 
            showColumnIndex : '1,3,5'
        }
        */
        data.showColumnIndex = data.showColumnIndex ? data.showColumnIndex.split(',') : []
        if(data.showColumnIndex.length == 0 && data.id){
            if(localStorage){
                let showColumnIndex = localStorage.getItem(data.id)
                if(showColumnIndex){
                    data.showColumnIndex = showColumnIndex
                    $this.data('show-column-index',showColumnIndex.join(','))
                }
            }
        }
        let $table = $this.closest('table')
        toggleTableShow($table , data.showColumnIndex)
    })
    $('body').on('click','.mo-table-column-submit',function () {
        let $this = $(this)
        let data = $this.data()
        // console.log('.mo-table-column-submit data : ',data)
        /* data {
            id : 'name' 
        }
        */
        let $form = $this.closest('form')
        let formData = $form.serializeArray()
        // console.log('.mo-table-column-submit form : ',formData)
        /* formData [
            { name:'column', value:'1' }
            { name:'column', value:'2' }
        ]
        */
        formData = formData.map(function(item){
            return item.value
        })
        $('#'+data.id).data('show-column-index',formData.join(','))
        if(localStorage){
            localStorage.setItem(data.id,formData.join(','))
        }
        let $table = $('#'+data.id).closest('table')
        toggleTableShow($table , formData.join(','))
    })
})
