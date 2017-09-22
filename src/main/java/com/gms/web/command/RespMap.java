package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Lazy @Data
public class RespMap {
	private String id, title, content, regdate, email, profile, birthday, gender;
	private int resp, hitcount;
}