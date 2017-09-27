<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<div id="container">
<div class="row">
  <div class="col-lg-6" style="width: 500px;margin: 0 auto;">
    <div class="input-group">
      <input type="text" id="search" name="search" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button onclick="app.member.searchStudent()" class="btn btn-default" type="button">Go!</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<br>
	<table id="member_list_tab">
		<tr>
			<th>No.</th>
			<th>ID</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>전화번호</th>
			<th>이메일</th>
			<th>수강과목</th>
			<th>등록일</th>
			<th>수정 / 삭제</th>
		</tr>
		<c:forEach var="i" items="${list}">
		<tr>
			<td><fmt:formatNumber value="${i.num}" pattern=""/></td>
			<td>${i.id}</td>
			<td><a onclick="app.member.detailStudent('${i.id}')">${i.name}</a></td>
			<td>${i.ssn}</td>
			<td>${i.phone}</td>
			<td>${i.email}</td>
			<td>${i.subjects}</td>
			<td>${i.regdate}</td>
			<td>
			<a onclick="app.member.updateStudent('${i.id}')">수정</a>
			/
			<a onclick="app.member.deleteStudent('${i.id}', '${pageNumber}')">삭제</a>
			</td>
			
		</tr>
		</c:forEach>
	</table>
	<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">
	  <ul class="pagination">
	    <li>
	    	<a>
	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
	    	</a>
	    </li>
	    <li>
	      <a aria-label="Previous">
	        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	      </a>
	    </li>
		<li class="active">
			<a>
			</a>
		</li>
	    <li >
	    	<a>
	    	</a>
	    </li>
    	<li>
	      	<a>
	        	<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	      	</a>
	    </li>
    	<li>	
    		<a>
    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
    		</a>
    	</li>
	  </ul>
	</nav>
</div>