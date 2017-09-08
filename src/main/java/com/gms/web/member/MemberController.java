package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping("/member_add")
	public String memberAdd() {
		logger.info("Member ADD");
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/member_list")
	public String memberList() {
		logger.info("Member list");
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_update")
	public String memberUpdate() {
		logger.info("Member update");
		return "auth:member/member_update.tiles";
	}
	@RequestMapping("/member_detail")
	public String memberDetail() {
		logger.info("Member detail");
		return "auth:member/member_detail.tiles";
	}
}
