package com.gnome.crossing.backend.db.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gnome.crossing.backend.db.dao.model.GameEntity;

/**
 * @author davidjmartin
 */
@Repository
public interface GameRepository extends JpaRepository<GameEntity, Long> {
}
