package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MajorDTO {
	private String majorId,title,id,subjId;

	@Override
	public String toString() {
		return "MajorBean [majorId=" + majorId + ", title=" + title + ", id=" + id + ", subjId=" + subjId + "]";
	}

}
