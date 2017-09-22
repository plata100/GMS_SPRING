package com.gms.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class Article {
	private String title,content,regdate,id;
	private int hitcount,articleseq;

	public String toString(){
		return "[글번호]"+articleseq+"\n[아이디]"+id+"\n[제목]"+title+"\n[내용]"+content+"\n[조회수]"+hitcount+"\n[작성일]"+regdate+"\n";
	}
}