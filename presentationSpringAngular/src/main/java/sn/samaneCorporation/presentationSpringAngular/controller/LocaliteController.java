package sn.samaneCorporation.presentationSpringAngular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sn.samaneCorporation.presentationSpringAngular.dao.LocaliteRepository;
import sn.samaneCorporation.presentationSpringAngular.entities.Localite;

@RestController
@CrossOrigin("*")
public class LocaliteController {
	
	@Autowired
	private LocaliteRepository localiteDb;
	

	@RequestMapping(value="/Localite", method = RequestMethod.GET)
	public List<Localite> localite(){
		
		return localiteDb.findAll();
	}
	
	@RequestMapping(value="/Localite/add", method = RequestMethod.POST)
	public Localite addLocalite(@RequestBody Localite localite) {
		
		
		return localiteDb.save(localite);
	}

}
