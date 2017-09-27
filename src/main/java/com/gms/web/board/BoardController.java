package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPostService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	
	@RequestMapping(value="/post/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> post(@PathVariable String cate, @RequestBody Article art) {
		Map<String,Object> map=new HashMap<>();
		IPostService insertService=null;
		switch(cate) {
			case "board":
				insertService=(x) -> {
					boardMapper.insert(cmd);
				};
				insertService.execute(cmd);
				break;
		}		
		return map;
	};
	
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?,?> list(@PathVariable String cate) {
		logger.info("Board Controller {}", "진입");
		Map<String,Object> map=new HashMap<>();
		IListService listService=null;
		IGetService countService=null;
		switch(cate) {
			case "board":
				listService=(x) -> {
					return boardMapper.selectList(cmd);
				};
				countService=(x) -> {
					return boardMapper.count(cmd);
				};
				map.put("list", listService.execute(cmd));
				map.put("total", countService.execute(cmd));
				break;
			case "grade":
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
	
	@RequestMapping("/get/{cate}/{num}")
	public @ResponseBody Map<?,?> get(@PathVariable String cate, @PathVariable String num) {
		Map<String,Object> map=new HashMap<>();
		IGetService detailService=null;
		cmd.setAction(num);
		cmd.setColumn("article_seq");
		switch(cate) {
			case "board":
				detailService=(x) -> {
					return boardMapper.selectOne(cmd);
				};
				map.put("article", detailService.execute(cmd));
				break;
		}
		return map;
	}
	
	@RequestMapping(value="/put/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> put(@PathVariable String cate, @RequestBody Article art) {
		Map<String,Object> map=new HashMap<>();
		IPutService updateService=null;
		cmd.setDir(art.getTitle());
		cmd.setPage(art.getContent());
		cmd.setView(art.getArticleSeq());
		switch(cate) {
			case "board":
				updateService=(x) -> {
					boardMapper.update(cmd);
				};
				updateService.execute(cmd);
				break;
		}
		return map;
	}
	
	@RequestMapping(value="/delete/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> delete(@PathVariable String cate, @RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		IDeleteService deleteService=null;
		cmd.setView(String.valueOf(reqMap.get("articleSeq")));
		System.out.println(String.valueOf(reqMap.get("articleSeq")));
		switch(cate) {
			case "board":
				deleteService=(x) -> {
					boardMapper.delete(cmd);
				};
				deleteService.execute(cmd);
				break;
		}
		return map;
	}
}