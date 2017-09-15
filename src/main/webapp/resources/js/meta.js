/*
 *
 */
var meta=meta || {};

meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return{
		init : init
	};
})();

var $$=function(){return meta.session.getPath('ctx');};
var js=function(){return meta.session.getPath('js');};
var css=function(){return meta.session.getPath('css');};
var img=function(){return meta.session.getPath('img');};

meta.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {init:init,getPath:getPath};
})();

meta.index=(function(){
	var $wrapper;
	var init=function(){onCreate();};
	var onCreate=function(){
		setContentView();
		$('#btn').on('click', function(){
			alert('버튼 클릭'); 
			$wrapper.empty();
		});
	};
	
	var setContentView=function(){
		$wrapper=$('#wrapper');
		var $image=$('<img/>',
			{
				id:'loading',
				src:img()+'/loading.gif'
			}
		);
		$wrapper.append($image);
		var $btn=$('<input/>',
			{
				id:'btn',
				type:'button',
				value:'버튼'
			}
		);
		$($wrapper).append($btn); //btn.appendTo(wrapper);와 같은 의미
	};
	return {init : init};
})();