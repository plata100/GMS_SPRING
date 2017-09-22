var meta=meta || {};
meta.common=(()=>{
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		
	};
	return { init:init };
})();
meta.index=(()=>{
	var $navbar,$container,img,js,ctx;
	var temp;
	var init=()=>{
		js=$$('j');
		temp=js+'/template.js';
		algo=js+'/algo.js';
		$container=$('#container');
		img=$$('i');
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			compUI.div('content').css({'width':'100%'}).appendTo($container);
			$content=$('#content');
			
			compUI.image('loading',img+'/loading.gif').css({width:'40%',margin:'0 auto'}).appendTo($content);
			compUI.h1('hBtn').attr('display','inline').appendTo($content);
			$hBtn=$('#hBtn');
			
			compUI.span('algoBtn').html('알고리즘').addClass('label label-default').appendTo($hBtn)
			.click(()=>{
				$container.empty();
				meta.navbar.init();
			});
			
			$('#hBtn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('로그인').addClass('label label-primary').css({'margin-left':'10px'});
			$('#btn2').click(()=>{
				meta.navbar.init();
				$container.empty();
				meta.auth.init();
			});
			
			compUI.span('bbsBtn').html('게시판 관리').addClass('label label-danger').css({'margin-left':'10px'}).appendTo($hBtn)
			.click(()=>{
				alert('게시판 가기');
				$content.empty();
				
				$.getJSON(ctx+'/get/board/list',data=>{
					var tbl=bbsUI.tbl();
					var tr='';
					$.each(data.list,function(i,j){
						tr+= '<tr style="height:25px;">'
							+'<td>'+j.articleSeq+'</td>'
							+'<td>'+j.id+'</td>'
							+'<td>'+j.title+'</td>'
							+'<td>'+j.content+'</td>'
							+'<td>'+j.regdate+'</td>'
							+'<td>'+j.hitcount+'</td>'
							+'</tr>';
					});
					$content.html(tbl);
					$('#tbody').html(tr);
				});
				
			});
		});
	};
	return {init:init};
})();
meta.auth=(()=>{
	var $container,img,js,temp;
	var init=()=>{
		js=$$('j');
		temp=js+'/template.js';
		loginView();
	};
	var loginView=()=>{
		$container=$('#container');
		img=$$('i');
		$.getScript(temp,()=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({width:'50%',margin:'0 auto'});
			$('#content').append(introUI.login(img));
			$('#input_pass').after(compUI.h1('hBtn'));
			$('#hBtn').append(compUI.span('login_btn'));
			$('#login_btn').html('로그인').addClass('label label-primary');
			$('#hBtn').append(compUI.span('cancel_btn'));
			$('#cancel_btn').html('취소').addClass('label label-danger').css({'margin-left':'20px'});
		});
	};
	var joinView=()=>{
		
	};
	return {
		init : init,
		loginView : loginView,
		joinView : joinView
	};
})();
meta.navbar=(()=>{
	var js,algo,temp;
	var init=()=>{
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=()=>{
		$.getScript(temp,()=> {
			$('#navbar').html(introUI.navbar());
			
			$('.dropdown-menu a').eq(0).on('click',()=>{
				app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',()=>{
				app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',()=>{
				app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',()=>{
				alert('학생삭제');
			});
			$('.dropdown-menu a').eq(4).on('click',()=>{
				app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',()=>{
				app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',()=>{
				app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',()=>{
				
			});
			$('.dropdown-menu a').eq(8).on('click',()=>{
				app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',()=>{
				app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',()=>{
				app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',()=>{
				
			});
			$('#arithBtn').click(()=>{
				$('#container').empty();
				$('#container').append(compUI.div('content')).css({'width':'100%'});
				$('#content').css({width:'50%',margin:'0 auto'});
				$('#content').html(algoUI.series());
				$('#start_txt').after(compUI.iTxt('start'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.iTxt('end'));
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
				$('#start_txt').after(compUI.iTxt('start'));
				$('#end_txt').after(compUI.iTxt('end'));
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
				$('#start_txt').after(compUI.iTxt('start'));
				$('#end_txt').after(compUI.iTxt('end'));
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
				$('#start_txt').after(compUI.iTxt('start'));
				$('#end_txt').after(compUI.iTxt('end'));
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
				$('#start_txt').after(compUI.iTxt('start'));
				$('#end_txt').after(compUI.iTxt('end'));
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
				$('#input_txt').after(compUI.iTxt('input_val'));
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
				$('#input_txt').after(compUI.iTxt('input_val'));
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