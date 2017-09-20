var meta=meta || {};
meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function(){
		
	};
	return { init:init };
})();
meta.index=(function(){
	var $navbar,$container,img,js,css;
	var temp;
	var init=function(){
		js=$$('j');
		temp=js+'/template.js';
		algo=js+'/algo.js';
		onCreate();
	};
	var onCreate=function(){
		$container=$('#container');
		img=$$('i');
		$.getScript(temp,(x,y)=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({width:'50%',margin:'0 auto'});
			$('#content').append(compUI.image('loading',img+'/loading.gif'));
			$('#loading').after(compUI.h1('h-btn'));
			$('#h-btn').append(compUI.span('btn')).attr('display','inline');
			$('#btn').html('알고리즘').addClass('label label-default');
			$('#h-btn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('로그인').addClass('label label-primary').css({'margin-left':'10px'});
			$('#h-btn').append(compUI.span('btn3')).attr('display','inline');
			$('#btn3').html('게시판').addClass('label label-danger').css({'margin-left':'10px'});
			$('#btn').click(()=>{
				$container.empty();
				meta.navbar.init();
			});
			$('#btn2').click(()=>{
				$container.empty();
				meta.auth.init();	
			});
		});
	};
	return {init:init};
})();
meta.auth=(function(){
	var $container,img,js,temp;
	var init=function(){
		js=$$('j');
		temp=js+'/template.js';
		loginView();
	};
	var loginView=function(){
		$container=$('#container');
		img=$$('i');
		$.getScript(temp,()=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({width:'50%',margin:'0 auto'});
			$('#content').append(introUI.login(img));
			$('#input_pass').after(compUI.h1('h-btn'));
			$('#h-btn').append(compUI.span('login_btn'));
			$('#login_btn').html('로그인').addClass('label label-primary');
			$('#h-btn').append(compUI.span('cancel_btn'));
			$('#cancel_btn').html('취소').addClass('label label-danger').css({'margin-left':'20px'});
		});
	};
	var joinView=function(){
		
	};
	return {
		init : init,
		loginView : loginView,
		joinView : joinView
	};
})();
meta.navbar=(function(){
	var js,algo,temp;
	var init=function(){
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp,()=> {
			$('#navbar').html(introUI.navbar());
			
			$('.dropdown-menu a').eq(0).on('click',function(){
				app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				
			});
			$('#arithBtn').click(()=>{
				$('#container').empty();
				$('#container').append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({width:'50%',margin:'0 auto'});
				$('#content').html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 :'+series.arithmetic($('#start').val(),$('#end').val()))
					});
				});
			});
			$('#switchBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#end_txt').after(compUI.input('end','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				
				$('h1').html('SwitchSeries의 합');
				$('#start').val('0').attr('readonly','true');
				$('#end').attr('value','100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 : '+series.switchSeries());
					});
				});
			});
			$('#diffBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#end_txt').after(compUI.input('end','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				
				$('h1').html('DifferenceSeries의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 : '+series.differenceSeries($('#end').val()));
					});
				});
			});
			$('#facBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#end_txt').after(compUI.input('end','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				
				$('h1').html('FactorialSeries의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 : '+series.factorialSeries($('#end').val()));
					});
				});
			});
			$('#fiboBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#end_txt').after(compUI.input('end','text'));
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				
				$('h1').html('FibonacciSeries의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 : '+series.fibonacciSeries($('#end').val()));
					});
				});
			});
			$('#selBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.sort());
				$('#input_txt').after(compUI.input('input_val','text'));
				$('#input_val').attr('placeholder','입력값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				var sortList=new Array(5);
				var i=0;
				$('#resultBtn').click(x=> {
					sortList[i]=$('#input_val').val();
					i++;
					$('#input_val').val('');
					if(i==5) {
						alert(sortList);
						$('#input_val').remove();
						$.getScript(algo,x=>{
							$('#result').text('결과 : '+sort.selection(sortList));
						});
						i=0;
					}
				});
			});
			$('#bubbleBtn').click(()=>{
				$('#container').empty();
				$('#container').html(algoUI.sort());
				$('#input_txt').after(compUI.input('input_val','text'));
				$('#input_val').attr('placeholder','입력값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('버블정렬');
				var sortList=new Array(5);
				var i=0;
				$('#resultBtn').click(x=> {
					sortList[i]=$('#input_val').val();
					i++;
					$('#input_val').val('');
					if(i==5) {
						alert(sortList);
						$('#input_val').remove();
						$.getScript(algo,x=>{
							$('#result').text('결과 : '+sort.bubble(sortList));
						});
						i=0;
					}
				});
			});
			$('#insertBtn').click(()=>{
				
			});
			$('#rankBtn').click(()=>{
				
			});
		});
	};
	return {init:init};
})();

meta.session={
	init : function(x){
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
		   },
	getPath : function(x){
				return sessionStorage.getItem(x);
		   }
};

var $$= function(x){return meta.session.getPath(x);};