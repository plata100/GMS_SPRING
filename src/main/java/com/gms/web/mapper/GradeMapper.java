package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.command.Command;
import com.gms.web.grade.MajorDTO;

@Repository
public interface GradeMapper {
	public void insert(Command cmd);
	public List<MajorDTO> selectSome(Command cmd);
	public MajorDTO selectOne(Command cmd);
	public String count(Command cmd);
	public void update(Command cmd);
	public void delete(Command cmd);
	
	public int insertMajor(List<MajorDTO> list);
	public int deleteMajor(Command cmd);
}
