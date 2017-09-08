package com.gms.web.common;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.complex.PathFactory;

@Controller
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping("/")
	public String home(Model model, HttpSession session) {
		logger.info("Home");
		model.addAttribute("serverTime",new SimpleDateFormat("yyyy년MM월dd일 HH시mm분ss초").format(new Date()));
		session.setAttribute("path", PathFactory.create());
		return "public:common/home.tiles";
	}
	
}