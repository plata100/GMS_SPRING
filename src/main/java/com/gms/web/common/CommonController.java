package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.member.MemberController;

@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/path/{dir}/{page}")
	public String move(
			@PathVariable String dir, 
			@PathVariable String page
			) {
		logger.info("CommonController {}", "진입");
		logger.info("dir", dir);
		logger.info("page", page);
		
		return String.format("auth:%s/%s.tiles", dir, page);
	}
}
