package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	@RequestMapping("/grade_add")
	public String gradeAdd() {
		logger.info("Grade ADD");
		return "auth:grade/grade_add.tiles";
	}
	@RequestMapping("/grade_list")
	public String gradeList() {
		logger.info("Grade LIST");
		return "auth:grade/grade_list.tiles";
	}
	@RequestMapping("/grade_update")
	public String gradeUpdate() {
		logger.info("Grade Update");
		return "auth:grade/grade_update.tiles";
	}
	@RequestMapping("/grade_detail")
	public String gradeDetail() {
		logger.info("Grade Detail");
		return "auth:grade/grade_detail.tiles";
	}

}
