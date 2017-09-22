package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;

@Component
public interface MemberService {
	public int add(Map<?,?> map);
	public List<?> list(Command cmd);
	public StudentDTO findById(Command cmd);
	public List<?> findByName(Command cmd);
	public String count(Command cmd);
	public int modify(MemberDTO member);
	public int remove(Command cmd);
	public Map<String,Object> login(Command cmd);
}
