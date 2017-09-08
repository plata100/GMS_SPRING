package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	private String id, pw, ssn, name, regdate,email,major,subject,phone,profile,gender;

	
	public String toString() {
		return "[name=" + name + ",id=" + id + ",pw=" + pw + ",ssn=" + ssn + "]\n";
	}

}