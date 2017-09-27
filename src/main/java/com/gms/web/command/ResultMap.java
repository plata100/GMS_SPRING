package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Lazy @Data
public class ResultMap {
	private String id, title, content, regdate, email, profile, birthday, gender, seq, hitcount, count;
}