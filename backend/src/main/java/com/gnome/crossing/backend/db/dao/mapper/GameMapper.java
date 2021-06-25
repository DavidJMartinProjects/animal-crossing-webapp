package com.gnome.crossing.backend.db.dao.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gnome.crossing.backend.db.dao.model.GameEntity;
import com.gnome.crossing.backend.model.Game;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;

/**
 * @author davidjmartin
 */
@Slf4j
@Component
public class GameMapper {

    @Autowired
    private ModelMapper modelMapper;

    private GameMapper() {}

    public Game toDto(GameEntity gameEntity) {
        log.debug("mapping customer entity with id: {} to dto.", gameEntity.getId());
        return modelMapper.map(gameEntity, Game.class);
    }

    public GameEntity toEntity(Game game) {
        log.debug("mapping game dto with to entity.");
        return modelMapper.map(game, GameEntity.class);
    }

}
