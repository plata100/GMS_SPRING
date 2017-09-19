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
	var setContentView=function(){};
	return { init:init };
})();
meta.index=(function(){
	var $wrapper,$navbar,$container,ctx,img,js,css;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
			setContentView();
			$('#btn').on('click',function(){
				$container.empty();
				//meta.auth.init();	
				meta.ui.navbar();
				meta.navbar.init();
			});
		};
	var setContentView=function(){
		$container=$('#container');
		img=$$('i');
		var $image = $('<img/>',
			{	
				id : 'loading',
				src : img+'/loading.gif'
			}
		);
		$container.append($image);
		var $btn=$('<input/>',
				{
					id : 'btn',
					type : 'button',
					value : '버튼'
				});
		$container.append($btn);
	};
	return {init:init};
})();
meta.algo={
	arithmetic : function(s,e){
		var sum=0;
		var start=s*1;
		var end=e*1;
		for(var i=start;i<=end;i++){
			sum=sum+i;
		}
		return sum;
	},
	switchSeries : ()=>{
		// 1 - 2 + 3 - 4 + ... + 100
		var sum=0;
		var i=0;
		var sw=0;
		do{
			i=i+1;
			if(sw==0) {
				sum=sum+i;
				sw=1;
			} else {
				sum=sum-i;
				sw=0;
			}
		} while(i<100);
		return sum;
	},
	differenceSeries : x=>{
		var i=0;
		var j=1;
		var sum=1;
		var limit=x*1;
		do {
			i++;
			j=j+i;
			sum=sum+j;
		} while (i<limit);
		return sum;
	},
	factorialSeries : x=> {
		var i=1, j=1, sum=1;
		var limit=x*1;
		do {
			i=i+1;
			j=j*i;
			sum=sum+j;
		} while(i<limit);
		return sum;
	},
	fibonacciSeries : x=> {
		var hap, cnt, c;
		var a=1, b=1;
		var limit=x*1;
		hap=2;
		cnt=2;
		while(true) {
			c=a+b;
			hap+=c;
			cnt++;
			if(cnt<limit) {
				a=b;
				b=c;
			} else {
				return hap;
				break;
			}
		}
		
	}
};
meta.auth=(function(){
	var $wrapper,ctx,img,js,css;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		loginView();
	};
	var loginView=function(){
		
		var ui=
			'<div id="container">'
			+'<div id="login_box">'
			+	'<img src="'+img+'/login.jpg" alt="" /><br />'
			+	'<span id="login_id">ID</span>'
			+	'<input id="login_input" type="text"  /> <br />'
			+	'<span id="login_pass">PASSWORD</span> '
			+	'<input type="text"  /> <br />'
			+'</div>'
		+'</div>';
		$wrapper.append(ui);
		$('#login_input').after(meta.comp.input(
			{
				type : 'button',
				id : 'login_btn',
				value : '로그인'
			}
		));
		$('#login_box').append(meta.comp.input(
			{
				type : 'button',
				id : 'cancel_btn',
				value : '취소'
			}
		));
	};
	var joinView=function(){};
	return {
		init : init
	};
})();
meta.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
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
			meta.ui.series();
			$('#resultBtn').click(()=>{
				$('#result').text('결과 : '+meta.algo.arithmetic($('#start').val(),$('#end').val()));
			});
		});
		$('#switchBtn').click(()=>{
			$('#container').empty();
			meta.ui.series();
			$('h1').html('SwitchSeries의 합');
			$('#start').val('0').attr('readonly','true');
			$('#end').attr('value','100').attr('readonly','true');
			$('#resultBtn').click(()=>{
				$('#result').text('결과 : '+meta.algo.switchSeries());;
			});
		});
		$('#differBtn').click(()=>{
			$('#container').empty();
			meta.ui.series();
			$('h1').html('DifferenceSeries의 합');
			$('#start').val('1').attr('readonly','true');
			$('#resultBtn').click(()=>{
				$('#result').text('결과 : '+meta.algo.differenceSeries($('#end').val()));;
			});
		});
		$('#facBtn').click(()=>{
			$('#container').empty();
			meta.ui.series();
			$('h1').html('FactorialSeries의 합');
			$('#start').val('1').attr('readonly','true');
			$('#resultBtn').click(()=>{
				$('#result').text('결과 : '+meta.algo.factorialSeries($('#end').val()));;
			});
		});
		$('#fiboBtn').click(()=>{
			$('#container').empty();
			meta.ui.series();
			$('h1').html('FibonacciSeries의 합');
			$('#start').val('1').attr('readonly','true');
			$('#resultBtn').click(()=>{
				$('#result').text('결과 : '+meta.algo.fibonacciSeries($('#end').val()));;
			});
		});
		
	};
	var setContentView=function(){
		var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
	};
	return {init:init};
})();
meta.ui=(function(){
	var $wrapper,$navbar,$container,ctx,img,js,css;
	var init=function(){
		$wrapper=$('#wrapper');
		$navbar=$('#navbar');
		$container=$('#container');
		img=$$('i');
	};
	var navbar = function(){
		$('#navbar').html(
		'<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" '
		+'          	aria-haspopup="true" '
		+'          	aria-expanded="false">회원관리 <span class="caret">'
		+'          	</span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="differBtn">계차수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>');
	}
	
	var series=function(){
		/*1부터 100까지 등차수열의 합*/
		var content = '<div id="content">'
			+'<h1>등차수열의 합</h1>'
			+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
			+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
			+'<div id="result"></div>';
		$('#container').append(content);
		$('#start_txt').after(meta.comp.input(
				{
					type:'text',
					id: 'start',
					placeholder : '시작값'
				}
			));
		$('#end_txt').after(meta.comp.input(
				{
					type:'text',
					id: 'end',
					placeholder : '끝값'
				}
			));
		$('#result').before(meta.comp.input(
				{
					type:'button',
					id: 'resultBtn',
					value : '결과보기'
				}
		));
	};
	
	return {
		init : init,
		series : series,
		navbar : navbar
	};
})();
meta.comp=
	{
		input : function(json){
			return $('<input/>',json);
		}
	};

meta.session=
	{
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