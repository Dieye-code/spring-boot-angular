package sn.samaneCorporation.presentationSpringAngular.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sn.samaneCorporation.presentationSpringAngular.entities.Localite;

@Repository
public interface LocaliteRepository extends JpaRepository<Localite, Integer> {

}
