package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;

@Repository
public interface GradeMapper {
	public int insertMajor(List<MajorDTO> list);
	public int deleteMajor(CommandDTO cmd);
}
