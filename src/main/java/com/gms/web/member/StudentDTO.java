package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class StudentDTO {
	private String no,id,name,pw,ssn,regdate,phone,email,title;

	@Override
	public String toString() {
		return "StudentBean [num=" + no + ", id=" + id + ", name=" + name + ", ssn=" + ssn + ", regdate=" + regdate
				+ ", phone=" + phone + ", email=" + email + ", title=" + title + "]";
	}
}
