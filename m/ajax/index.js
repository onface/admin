var $ = require('jquery')
module.exports = function () {
	$(function (){
		$('body').on('click', '[data-ui="ajax"][data-url]', function(){
		    let $this = $(this)
		    let noError = true
		    // TODO: data 转json
		    let dataDefault = {
		    	type:'get',
		    	remove:false,
		    	ui:'ajax',
		    	prompt:false,
		    	confirm:false,
		    	data:''
		    }
		    let data = $.extend({},dataDefault, $this.data())

		    if (!data.url){
		    	alert('data-url 不能为空')
		    	return false;
		    }
		    //转换json
		    if (typeof(data.data) == 'string') {
				data.data = '{'+data.data.replace(/(?=[&=]*)([^=&]+)/g,'"$1"').replace(/=/g,':').replace(/&/g,',')+'}'
				data.data = JSON.parse(data.data)
			}
		    
		    var ajaxxhr = function (noterror){
		    	if(noterror){
			    	if($this.hasClass('mo-btn')){
				    	$this.addClass('mo-btn--loading')
			    	}
			    	$this.data('mo-ajax--disabled','true')
				    $.ajax({
				    	url:data.url,
				    	type:data.type,
				    	dataType:'json',
				    	data:data.data
				    }).done(function(res){
					   	$this.removeClass('mo-btn--loading')
				    	if (res.msg) {
				    		alert(res.msg)
				    	}
				    	if(res.status === 'success'){
				    		if(data.remove){
				    			let selectors = data.remove.split('&')
				    			let $target = selectors.length % 2 !== 0 ? $('body') : $this 
				    			if(selectors.length % 2 !== 0){
				    				selectors.unshift("find" );
				    			}
				    			{
				    				for (let i = 0; i < selectors.length; i = i + 2) {
				    					let method = selectors[i] 
				    					let text = selectors[i+1]
				    					$target = $target[method](text)
				    				}
				    			}
				    			$target.remove()
				    		}
				    	}
				    	$this.data('mo-ajax--disabled','disabled')
				    })
		    	}
		    }
		    var promptAdd = function () {
			    if(data.prompt){
			    	$.each(data.prompt,function(key,value){
			    		let promptText = key.split('|')
			    		let promptLength = promptText.length
			    		let textTemp = promptLength == 2?promptText[1]:promptText[0]
			    		let promptDialog = prompt(textTemp,value)
			    		let userAgent = navigator.userAgent; 
			    		if(navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 1){
			    			if (promptDialog == ''){
			    				if(!confirm('是否终止操作? 终止选取消,填空选好')){
					    			promptDialog = null
						    	}
			    			}
			    		}
						if (promptDialog != null){
				    	 	data.data[promptText[0]] = promptDialog
					    }else if(promptDialog == null){
							 // TODO: 中断 promat
							 noError = false
							 return false;
					    }

			    	})
			    }
		    }
		    if(data.confirm && $this.data('mo-ajax--disabled') != 'true'){
		    	let confirmText = data.confirm ||'你真的确定了么？🐶'
		        if(confirm(confirmText)){
		        	promptAdd()
		        	ajaxxhr(noError)
				}
		    }
		    else {
		    	promptAdd()
		        ajaxxhr(noError)
		    }
		    return false
		})
	})
}
