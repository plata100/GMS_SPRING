package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	private String id, password, birthday, gender, ssn, name, regdate, email, major, subject, phone, profile;

	public String toString() {
		return "[name=" + name + ",id=" + id + ",password=" + password + ",email=" + email + ",phone=" + phone + "]\n";
	}

}