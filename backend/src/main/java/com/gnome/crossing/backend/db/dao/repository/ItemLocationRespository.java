package com.gnome.crossing.backend.db.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gnome.crossing.backend.db.dao.model.ItemLocationEntity;

/**
 * @author davidjmartin
 */
@Repository
public interface ItemLocationRespository extends JpaRepository<ItemLocationEntity, Long> {

}

