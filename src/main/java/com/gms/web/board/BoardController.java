package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IListService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	
	@RequestMapping("/get/{cate}/post")
	public @ResponseBody Map<?,?> post(@PathVariable String cate) {
		Map<String,Object> map=new HashMap<>();
		
		return map;
	};
	
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> list(@PathVariable String cate) {
		logger.info("Board Controller {}", "진입");
		Map<String,Object> map=new HashMap<>();
		IListService listService=null;
		switch(cate) {
			case "board":
				cmd=null;
				/*listService=(x) -> {
					return boardMapper.selectSome(cmd);
				};
				map.put("list", listService.execute(cmd));*/
				map.put("msg", "Hello AJAX!!");
				break;
			case "grade":
				cmd=null;
				/*
				listService=(x) -> {
					return gradeMapper.selectSome(cmd);
				};
				map.put("list", listService.execute(cmd));
				*/
				break;
		}
		return map;
	}
	
	@RequestMapping("/get/{cate}/get")
	public @ResponseBody Map<?,?> get(@PathVariable String cate) {
		Map<String,Object> map=new HashMap<>();
		
		return map;
	}
	
	@RequestMapping("/get/{cate}/putt")
	public @ResponseBody Map<?,?> put(@PathVariable String cate) {
		Map<String,Object> map=new HashMap<>();
		
		return map;
	}
	
	@RequestMapping("/get/{cate}/delete")
	public @ResponseBody Map<?,?> delete(@PathVariable String cate) {
		Map<String,Object> map=new HashMap<>();
	
		return map;
	}
}