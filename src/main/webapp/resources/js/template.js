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
	search : ()=> {
		return '<div id="board">'
		+'<div style="width:90%; margin:20px auto">'
		+'<select id="searchOption" class="form-control" style="width:15%; float:left; margin-left:15%">'
		+'	<option id="searchByName">작성자</option>'
		+'	<option id="searchByTitle">제목</option>'
		+'</select>'
		+'<div id="searchGroup" class="input-group" style="width:50%;">'
		+'     <input type="text" id="search" name="search" class="form-control">'
		+'     <span class="input-group-btn">'
		+'      <button class="btn btn-default" type="submit">Go!</button>'
		+'    </span>'
		+'</div>'
		+'</div>'
		+'<div style="margin:20px 0">'
		+'	<br>'
		+'	<h4 id="total" style="margin-left:10%; color:red; display:inline">'
		+'		총게시글수'
		+'	</h4>'
		+'	<input id="writeBtn" class="btn btn-warning" style="width:100px; margin-left:80%;" type="submit" value="글쓰기"/>'
		+'</div>'
		+'</div>';
	},
	tbl : ()=> {
		var tbl='<div="tbl><table id="tbl" border=1 style="border-collapse: collapse; width:90%; margin:0 auto;"><thead><tr style="height:25px;">'
		var a=[{width:'5%',txt:'NO'},
			{width:'40%',txt:'제목'},
			{width:'15%',txt:'글쓴이'},
			{width:'30%',txt:'작성일'},
			{width:'10%',txt:'조회수'}];
		$.each(a,(i,j)=>{
			tbl+='<th style="width:'+j.width
			+'; text-align:center;">'+j.txt+'</th>'
		});
		tbl+='</tr></thead><tbody id="tbody">'
		tbl+='</tbody></table></div>';
		return tbl;
	},
	pagination : ()=> {
		return '<nav aria-label="Page navigation" style="width:400px; margin:0 auto;">'
		  +'<ul class="pagination">'
		    +'<li>'
		        +'<a>'
		        +'   <span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>'
		        +'</a>'
		    +'</li>'
		    +'<li>'
		      +'<a aria-label="Previous">'
		      +'  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
		      +'</a>'
		    +'</li>'
		    
		    +'<li class="active"><a>1</a></li>'
		    +'<li><a>2</a></li>'
		    +'<li><a>3</a></li>'
		    +'<li><a>4</a></li>'
		    +'<li><a>5</a></li>'
		    
		    +'<li>'
		        +'<a>'
		        +'    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
		        +'</a>'
		    +'</li>'
		    +'<li>    '
		        +'<a>'
		        +'    <span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>'
		        +'</a>'
		    +'</li>'
		  +'</ul>'
		+'</nav>';
	},
	detail : ()=>{
		return '<div class="page-header">'
		+'    <h1 style="display:inline; margin-left:10%;">게시판</h1>'
		+'        <a style="font-size:large;">목록가기</a>'
		+'</div>'
		+'<div class="container">'
		+'    <div class="row">'
		+'        <div class="col-md-12">'
		+'            <div class="well well-sm">'
		+'                <form class="form-horizonal" method="post">'
		+'                    <fieldset>'
		+'                        <legend id="legend" class="text-center header">게시글쓰기</legend>'
		+'                        <div class="form-group">'
		+'                            <span class="col-me-1 col-md-offset-2 text-center">'
		+'                                <i class="fa fa-user bigicon"></i>'
		+'                            </span>'
		+'                            <div class="col-md-12">'
		+'                                <input id="fname" name="title" type="text" placeholder="제목" class="form-control">'
		+'                            </div>'
		+'                        </div>'
		+'                        <div class="form-group">'
		+'                            <span class="col-me-1 col-md-offset-2 text-center">'
		+'                                <i class="fa fa-user bigicon"></i>'
		+'                            </span>'
		+'                            <div class="col-md-12">'
		+'                                <input id="lname" name="name" type="text" placeholder="글쓴이" class="form-control">'
		+'                            </div>'
		+'                        </div>'
		+'                        <div class="form-group">'
		+'                            <span class="col-me-1 col-md-offset-2 text-center">'
		+'                                <i class="fa fa-user bigicon"></i>'
		+'                            </span>'
		+'                            <div class="col-md-12">'
		+'                                <textarea id="message" name="message" rows="10" class="form-control"></textarea>'
		+'                            </div>'
		+'                        </div>'
		+'                        <div class="form-group">'
		+'                            <div class="col-md-12 text-center">'
		+'                                <button id="confirmBtn" type="submit" style="width:200px" class="btn btn-primary btn-lg">확인</button>'
		+'                                <button id="cancelBtn" type="reset" style="width:200px" class="btn btn-danger btn-lg">취소</button>'
		+'                            </div>'
		+'                        </div>'
		+'                    </fieldset>'
		+'                </form>'
		+'            </div>'
		+'        </div>'
		+'    </div>'
		+'</div>'
		+'<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aria-labelledby="modallabel" aria-hidden="true">'
		+'	<div class="modal-dialog">'
		+'		<div class="modal-content">'
		+'			<div class="modal-header">'
		+'				<button type="button" class="close" data-dismiss="modal">'
		+'				<span aria-hidden="true">x</span>'
		+'				<span class="sr-only">Close</span></button>'
		+'				<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
		+'			</div>'
		+'			<div class="modal-body">'
		+'				<form>'
		+'					<div class="form-group">'
		+'						<label for="inputPass">Password</label>'
		+'						<input type="password" class="form-control" id="user-email2" placeholder="Enter Password">'
		+'					</div>'
		+'					<button type="submit" style="width:200px" class="btn btn-primary center-block">확인</button>'
		+'				</form>'
		+'			</div>'
		+'		</div>'
		+'	</div>'
		+'</div>';
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
	btn : x=>{return $('<button/>',{id:x})},
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