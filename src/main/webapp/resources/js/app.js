/**
Member javaScript
*/
var app=app || {};

app.path=(function(){
	var init=function(ctx){
		app.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	return {
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css
	};
})();
app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	}
})();
app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group a').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
		 })
		$('.list-group a').eq(1).on('click',function(){
			app.controller.list('member','member_list','1');
		})
		$('.list-group a').eq(2).on('click',function(){
			app.controller.detailStudent(prompt('ID 입력'));
		})
		$('.list-group a').eq(3).on('click',function(){
			app.controller.deleteTarget('이름');
		})
		$('.list-group a').eq(4).on('click', function(){
			app.controller.moveTo('grade','grade_add');
		})
		$('.list-group a').eq(5).on('click', function(){
			app.controller.list('grade','grade_list','1');
		})
		$('.list-group a').eq(6).on('click', function(){
			alert('detailGrade');
		})
		$('.list-group a').eq(7).on('click',function(){
			app.controller.deleteTarget('이름');
		})
		$('.list-group a').eq(8).on('click',function(){
			app.controller.moveTo('board', 'board_add');
		})
		$('.list-group a').eq(9).on('click',function(){
			app.controller.list('board','board_list','1');
		})
		$('.list-group a').eq(10).on('click',function(){
			alert('detailBoard');
		})
		$('.list-group a').eq(11).on('click',function(){
			app.controller.deleteTarget('번호');
		})
	};
	var setContentView=function(){
		 var $u1 = $("#main_ul_stu");
		 var $u2 = $("#main_ul_grade");
		 var $u3 = $("#main_ul_board");
		 $u1.addClass("list-group");
		 $u2.addClass("list-group");
		 $u3.addClass("list-group");
		 $('.list-group').children().addClass("list-group-item");
	};
	return{
		init : init
	};
})();
app.auth=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#loginBtn').on('click',function(){
			if($('#input_id').val()===""){
				alert('ID 를 입력해 주세요');
				return false;
			}
			if($('#input_pass').val()===""){
				alert('PASS를 입력해 주세요');
				return false;
			}
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			$('#login_box').attr('method','post');
			return true;
		});
	};
	var setContentView=function(){};
	return {
		init : init
	};
})();
app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.dropdown-menu a').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
		})
		$('.dropdown-menu a').eq(1).on('click',function(){
			 app.controller.list('member','member_list','1');
		})
		$('.dropdown-menu a').eq(2).on('click',function(){
			 app.controller.detailStudent(prompt('ID 입력'));
		})
		$('.dropdown-menu a').eq(3).on('click',function(){
			 app.controller.deleteTarget('이름');
		})	
		$('.dropdown-menu a').eq(4).on('click', function(){
			app.controller.moveTo('grade','grade_add');
		})
		$('.dropdown-menu a').eq(5).on('click', function(){
			app.controller.list('grade','grade_list','1');
		})
		$('.dropdown-menu a').eq(6).on('click', function(){
			alert('detailGrade');
		})
		$('.dropdown-menu a').eq(7).on('click',function(){
			app.controller.deleteTarget('이름');
		})
		$('.dropdown-menu a').eq(8).on('click',function(){
			app.controller.moveTo('board','board_add');
		})
		$('.dropdown-menu a').eq(9).on('click',function(){
			app.controller.list('board','board_list','1');
		})
		$('.dropdown-menu a').eq(10).on('click',function(){
			alert('detailBoard');
		})
		$('.dropdown-menu a').eq(11).on('click',function(){
			app.controller.deleteTarget('번호');
		})
	};
	var setContentView=function(){
		 var $u1 = $("#navbar_ul_stu");
		 var $u2 = $("#navbar_ul_grade");
		 var $u3 = $("#navbar_ul_board");
		 $u1.addClass("dropdown-menu");
		 $u2.addClass("dropdown-menu");
		 $u3.addClass("dropdown-menu");
	};
	return{
		init : init
	};
})();

app.member=(function(){
	var init=function(){
		onCreate();
		
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
		//	id,phone,email,title;
			sessionStorage.setItem('id',$('#detail_id').text());
			sessionStorage.setItem('phone',$('#detail_phone').text());
			sessionStorage.setItem('email',$('#detail_email').text());
			sessionStorage.setItem('title',$('#detail_title').text());
			controller.moveTo('member','member_update');
		});
		
	};
	var setContentView=function(){
		
	};
	
	return {
		init : init
	};
})();
app.grade=(function(){
	var init=function(){};
	var onCreate=function(){};
	var setContentView=function(){};
	return {
		init : init
	};
})();
app.board=(function(){
	var init=function(){};
	var onCreate=function(){};
	var setContentView=function(){};
	return {
		init : init
	};
})();

app.controller=(function(){
	var init=function(){
	};
	var moveTo=function(dir,page){
		alert('가야될 경로 : '+dir+" 페이지 : "+page);
		location.href=app.path.ctx()+'/'+dir+"/"+page;
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+'/'+dir+"/"+page+"&pageNumber="+pageNumber;
	};
	var deleteTarget=function (target){
		prompt(target+'의 ID?');
	};
	var detailStudent=function(id){
		location.href=app.path.ctx()+"/member/member_detail"+"&id="+id;
	};
	
	return {
		init : init,
		moveTo : moveTo,
		deleteTarget : deleteTarget,
		detailStudent : detailStudent,
		list : list
	};
})();