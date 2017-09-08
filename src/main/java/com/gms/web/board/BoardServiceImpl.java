package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	public static BoardServiceImpl getInstance(){
		return new BoardServiceImpl();
	}
	private BoardServiceImpl(){
		
	}
	@Override
	public String write(ArticleDTO bean) {
		return null; //(Integer.parseInt(ArticleDAOImpl.getInstance().insert(bean))==1)?"게시성공":"게시실패";
	}

	@Override
	public List<ArticleDTO> list() {
		return null; // ArticleDAOImpl.getInstance().selectAll();
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		return null; // ArticleDAOImpl.getInstance().selectById(id);
	}

	@Override
	public ArticleDTO findSeq(String seq) {
		return null; // ArticleDAOImpl.getInstance().selectBySeq(seq);
	}

	@Override
	public String count() {
		return null; // ArticleDAOImpl.getInstance().count();
	}

	@Override
	public String modify(ArticleDTO bean) {
		return null; // ArticleDAOImpl.getInstance().update(bean).equals("1")?"수정성공":"수정실패";
	}

	@Override
	public String remove(String seq) {
		return null; // ArticleDAOImpl.getInstance().delete(seq).equals("1")?"삭제성공":"삭제실패";
	}

}
