package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;

@Service
public class MemberServiceImpl implements MemberService {
	public static MemberServiceImpl instance = new MemberServiceImpl();
	public static MemberServiceImpl getInstance(){
		return instance;
	}
	Map<String, MemberDTO> map;

	private MemberServiceImpl() {
		map = new HashMap<>();
	}

	@Override
	public String addMember(Map<String,Object> map) {
		System.out.println("member service 진입");
		MemberDTO m =(MemberDTO) map.get("member");
		System.out.println("넘어온 회원의 이름:"+m.getName());
		@SuppressWarnings("unchecked")
		List<MajorDTO>list= (List<MajorDTO>) map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		//MemberDAOImpl.getInstance().insert(map);
		return null;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return null;//MemberDAOImpl.getInstance().selectAll(cmd);
	}

	@Override
	public String countMembers(CommandDTO cmd) {
		return null; //String.valueOf(MemberDAOImpl.getInstance().count(cmd));
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null; // MemberDAOImpl.getInstance().selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		return null; // MemberDAOImpl.getInstance().selectByName(cmd);
	}
	@Override
	public String modify(StudentDTO student) {
		return null; // (Integer.parseInt(MemberDAOImpl.getInstance().update(student))==1)?"수정성공":"수정실패";
	}

	@Override
	public String remove(CommandDTO cmd) {
		return null; // (Integer.parseInt(MemberDAOImpl.getInstance().delete(cmd))==1)?"삭제성공":"삭제실패";
	}
	@Override
	public Map<String,Object> login(MemberDTO bean) {
		Map<String,Object> map = new HashMap<>();
		CommandDTO cmd = new CommandDTO();
		cmd.setSearch(bean.getId());
		StudentDTO student = findById(cmd);
		String page=
		 (student!=null)?
				(bean.getPw().equals(student.getPw()))?
						"home":"login_fail":"join";
		map.put("page", page);
		map.put("user", student);
		return map;
	}
}
