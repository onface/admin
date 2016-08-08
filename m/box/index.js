var $ = require('jquery')
$(function () {
    $('body').on('click', '.mo-box-hd', function () {
        var $this = $(this)
        var $parent = $this.closest('.mo-box')
        var $bd = $parent.find('.mo-box-bd')
        $bd.toggleClass('mo-hide')
    })
    $('.mo-box-hd').each(function () {
    	var $this = $(this)
    	if (!$this.find('.mo-box-hd-icon').length) {
    		$this.prepend('<i class="mo-box-hd-icon fa fa-wpforms"></i>')
    	}
    	if (!$this.find('.mo-box-hd-close').length) {
    		$this.prepend('<span class="mo-box-hd-close fa fa-chevron-down"></span>')
    	}
    })
})
