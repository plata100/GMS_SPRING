<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="container">
	<form id="join_form">
		<fieldset>
		<legend>Join information</legend>
		<span id="join_item">ID</span>
		<input name="id" type="text" placeholder="아이디" value="lee"/><br />
		<span id="join_item">PASSWORD</span>
		<input name="password" type="password" placeholder="비밀번호" value="1"/><br />
		<span id="join_item">NAME</span>
		<input name="name" type="text" placeholder="이름" value="이길동"/><br />
		<span id="join_item">생년월일</span>
		<input name="birthday" type="text" value="950505"/><br />
		<span id="join_item">성별</span>
		<input type="radio" name="gender" value="male"/> 남자
		<input type="radio" name="gender" value="female" /> 여자<br />
		<span id="join_item">이메일</span>
		<input type="email" name="email" value="leegd@test.com" /><br />
		<span id="join_item">전화번호</span>
		<input type="text" name="phone" value="010-1234-5678" /><br />
		<span id="join_item">전공</span>
		<select name="major">
			<option value="computer" selected>컴퓨터공학</option>
			<option value="economics">경제학</option>
			<option value="tourism">관광학</option>
			<option value="art">미술학</option>
		</select><br />
		<h5>수강과목</h5>
		<input type="checkbox" name="subject" value="java" checked/>자바 <br />
		<input type="checkbox" name="subject" value="c" checked/>C언어 <br />
		<input type="checkbox" name="subject" value="html" />HTML <br />
		<input type="checkbox" name="subject" value="css" />CSS <br />
		<input type="checkbox" name="subject" value="javascript" />자바스크립트<br />
		<input type="checkbox" name="subject" value="sql" />SQL<br />
		<input type="checkbox" name="subject" value="python" />파이썬<br />
		
		<button id="join_yes_btn" type="submit">등록</button>
		<button id="join_no_btn" type="reset">취소</button>
		</fieldset>
	</form>
</div>
<script>
app.member.init();
</script>