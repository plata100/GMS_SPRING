var introUI={
	login : i=> {
		return '<div id="login_box">'
			+	'<img src="'+i+'/login.jpg" alt="" /><br />'
			+	'<span id="login_id">ID</span>'
			+	'<input id="input_id" type="text" name="id" /> <br />'
			+	'<span id="login_pass">PASSWORD</span> '
			+	'<input id="input_pass" type="text" name="password" /> <br />'
			+ '</div>';
	},
	navbar : ()=> {
		return '<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">학생관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'      </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'        <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_series" class="dropdown-menu">'
		+'            <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="diffBtn">계차수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'        <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_array" class="dropdown-menu">'
		+'            <li><a id="selBtn">선택정렬</a></li>'
		+'            <li><a id="bubbleBtn">버블정렬</a></li>'
		+'            <li><a id="insertBtn">삽입정렬</a></li>'
		+'            <li><a id="rankBtn">석차구하기</a></li>'
		+'            <li><a id="binSearchBtn">이분검색</a></li>'
		+'            <li><a id="mergeBtn">병합</a></li>'
		+'            <li><a id="stackBtn">스택</a></li>'	
		+'          </ul>'
		+'        </li>'
		+'        <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행렬 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_matrix" class="dropdown-menu">'
		+'            <li><a id="55Btn">기본 5행5열</a></li>'
		+'            <li><a id="rightTriBtn">직각삼각형</a></li>'
		+'            <li><a id="zigBtn">지그재그(*)</a></li>'
		+'            <li><a id="diamondBtn">다이아몬드</a></li>'
		+'            <li><a id="sandBtn">모래시계</a></li>'
		+'            <li><a id="emptyTriBtn">오른쪽 빈삼각형</a></li>'
		+'            <li><a id="isoTriBtn">이등변삼각형</a></li>'
		+'            <li><a id="roundBtn">90도 회전</a></li>'
		+'            <li><a id="snailBtn">달팽이(*)</a></li>'
		+'            <li><a id="diagoBtn">대각선채우기</a></li>'
		+'            <li><a id="magicBtn">마방진(*)</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>';
	}
};

var bbsUI={
	list : ()=> {
		compUI.div('content').css({'width':'100%'});
		$('#content').css({'width':'70%','margin':'0 auto'});
		compUI.table('list-table').attr('border','1').css({'border-collapse':'collapse','width':'100%'}).appendTo($('#content'));
		for(var i=0; i<5; i++) {
			compUI.tr('list-tr-'+i).css({'height':'25px'}).appendTo($('#list-table'));
			if(i==0) {
				for(var j=0; j<5; j++) {
					compUI.th('list-th-'+j).css({'text-align':'center'}).appendTo($('#list-tr-0'));	
				}
				$('#list-th-0').html('No').css({'width':'10%'});
				$('#list-th-1').html('제목').css({'width':'40%'});
				$('#list-th-2').html('글쓴이').css({'width':'15%'});
				$('#list-th-3').html('작성날짜').css({'width':'25%'});
				$('#list-th-4').html('조회수').css({'width':'10%'});
			} else {
				for(var j=0; j<5; j++) {
					compUI.th('list-th-'+j).css({'text-align':'center'}).appendTo($('#list-tr-'+i));
				}
			}
		}
		$('#list-table').after(compUI.nav('pagi-nav').attr('aria-label','Page navigation').css({width:'400px',margin:'0 auto'}));
		compUI.ul('pagi-ui').addClass('pagination').appendTo($('#pagi-nav'));
		for(var i=0; i<5; i++) {
			compUI.li('pagi-ui-li-'+i).appendTo($('#pagi-ui'));
			$('#pagi-ui-li-'+i).append(compUI.a('pagi-ui-li-a-'+i));
		};
		compUI.span('pagi-ui-li-a-0-span').addClass('glyphicon glyphicon-step-backward').attr('aria-hidden','true').appendTo($('#pagi-ui-li-a-0'));
		compUI.span('pagi-ui-li-a-1-span').addClass('glyphicon glyphicon-chevron-left').attr('aria-hidden','true').appendTo($('#pagi-ui-li-a-1'));
		compUI.span('pagi-ui-li-a-2-span').appendTo($('#pagi-ui-li-a-2'));
		compUI.span('pagi-ui-li-a-3-span').addClass('glyphicon glyphicon-chevron-right').attr('aria-hidden','true').appendTo($('#pagi-ui-li-a-3'));
		compUI.span('pagi-ui-li-a-4-span').addClass('glyphicon glyphicon-step-forward').attr('aria-hidden','true').appendTo($('#pagi-ui-li-a-4'));		
	}
}

var compUI={
	a : x=>{return $('<a/>',{id:x});},
	br : ()=>{return $('<br/>')},
	div : x=>{return $('<div/>',{id:x});},
	h1 : x=>{return $('<h1/>',{id:x});},
	span : x=>{return $('<span/>',{id:x});},
	image : (x,y)=>{return $('<img/>',{id:x,src:y});},
	iTxt : x=>{return $('<input/>',{id:x, type:'text'})},
	aBtn : x=>{return $('<a/>',{href:'#', role:'button', id:x})},
	iBtn : x=>{return $('<input/>',{id:x, type:'button'})},
	input : (x,y)=>{return $('<input/>',{id:x,type:y});},
	table : (x)=>{return $('<table/>',{id:x})},
	th : x=>{return $('<th/>',{id:x})},
	tr : x=>{return $('<tr/>',{id:x})},
	td : x=>{return $('<td/>',{id:x})},	
	ul : x=>{return $('<ul/>',{id:x})},
	li : x=>{return $('<li/>',{id:x})},
	nav : x=>{return $('<nav/>',{id:x})}
};

var algoUI={
	series : ()=>{
		return '<div id="content">'
			+'<h1>등차수열의 합</h1>'
			+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
			+'<br/><span id="end_txt">끝값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
			+'<div id="result"></div>'
			+'</div>';	
	},
	sort : ()=>{
		return '<div id="content">'
			+'<h1>선택정렬</h1>'
			+'<span id="input_txt">입력값 : &nbsp;&nbsp;</span>'
			+'<div id="result"></div>'
			+'</div>';	
	}
};