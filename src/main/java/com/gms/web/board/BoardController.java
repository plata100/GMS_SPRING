package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/add")
	public String boardWrite() {
		logger.info("Board Write");
		return "auth:board/board_write.tiles";
	}
	@RequestMapping("/list")
	public String boardList() {
		logger.info("Board LIST");
		return "auth:board/board_list.tiles";
	}
	@RequestMapping("/update")
	public String boardUpdate() {
		logger.info("Board Update");
		return "auth:board/board_update.tiles";
	}
	@RequestMapping("/detail")
	public String boardDetail() {
		logger.info("Board Detail");
		return "auth:board/board_detail.tiles";
	}

}