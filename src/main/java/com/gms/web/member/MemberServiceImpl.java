package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberMapper mapper;
	@Autowired GradeMapper gMapper;
	@Autowired CommandDTO cmd;
	@Autowired MajorDTO major;
	@Autowired MemberDTO member;
	
	@Override @Transactional
	public int add(Map<?,?> map) {
		int rs=0;
		member=(MemberDTO) map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>) map.get("list");
		mapper.insert(member);
		gMapper.insertMajor(list);
		return rs;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		return null; // MemberDAOImpl.getInstance().selectByName(cmd);
	}
	
	@Override
	public String count(CommandDTO cmd) {
		logger.info("count is {}", "entered");
		String count=mapper.count(cmd);
		logger.info("count is {}", count);
		return count; 
	}
	
	@Override
	public int modify(MemberDTO member) {
		return mapper.update(member);
	}

	@Override @Transactional
	public int remove(CommandDTO cmd) {
		int rs=0;
		mapper.delete(cmd);
		gMapper.deleteMajor(cmd);
		return rs;
	}
	
	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		Map<String,Object> map = new HashMap<>();
		member=mapper.login(cmd);
		String page="", message="";
		if(member!=null) {
			if(cmd.getView().equals(member.getPassword())) {
				message="success";
				page="auth:common/main.tiles";
			} else {
				message="비밀번호가 틀렸습니다.";
				page="public:common/login.tiles";
			}
		} else {
			message="ID가 존재하지 않습니다.";
			page="public:common/join.tiles";
		}
		map.put("message", message);
		map.put("page", page);
		map.put("user", member);
		return map;
	}
}
