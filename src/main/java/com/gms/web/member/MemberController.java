package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PageProxy;

@Controller
@SessionAttributes("student")
@RequestMapping({("/member"), ("/student")})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(
			@ModelAttribute MemberDTO member,
			@RequestParam("subject") List<String> list
			) {
		logger.info("Member Add");
		Map<String,Object> map=new HashMap<>();
		List<MajorDTO> paramList =new ArrayList<>();
		for(String m:list) {
			major=new MajorDTO();
			major.setMajorId(String.valueOf((int) (Math.random() * 8999 + 1000)));
			major.setId(member.getId());
			major.setSubjId(m);
			major.setTitle(m);
			paramList.add(major);
		}
		logger.info("등록 과목 \n"+paramList);
		map.put("member", member);
		map.put("list", paramList);
		service.add(map);
		return "redirect:/member/list/1";
	}
	
	@RequestMapping("/list/{pageNumber}")
	@SuppressWarnings("unchecked")
	public String list(Model model, @PathVariable int pageNumber) {
		logger.info("@crtl: member list {}", "진입");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		int count=Integer.parseInt(service.count(cmd));
		pxy.setTheNumberOfRows(count);
		int[] result=new int[6];
		int theNumberOfPages=0, startPage=0, endPage=0;
		theNumberOfPages=(pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0 ? pxy.getTheNumberOfRows() / pxy.getPageSize() : pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage= (startPage + pxy.getBlockSize() - 1 <= theNumberOfPages) ? startPage + pxy.getBlockSize() - 1 : theNumberOfPages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)? 1 : 0;
		result[5]=startPage+pxy.getBlockSize();
		if(pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() + 1){
			if(pxy.getPageNumber() == 1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			} else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		List<StudentDTO> list= (List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/detail/{id}")
	public String memberDetail(Model model, @PathVariable String id) {
		logger.info("Member Detail");
		cmd.setSearch(id);
		model.addAttribute("student", service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String updateStudent(@ModelAttribute MemberDTO member) {
		logger.info("Update Student");
		service.modify(member);
		return "redirect:/member/detail/"+member.getId();
	}
	
	@RequestMapping("/delete/{id}/{pageNumber}")
	public String memberDelete(@PathVariable String id, @PathVariable String pageNumber) {
		logger.info("Member Delete");
		cmd.setSearch(id);
		service.remove(cmd);
		return "redirect:/member/list/"+pageNumber;
	}
}
