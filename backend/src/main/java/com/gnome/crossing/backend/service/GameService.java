package com.gnome.crossing.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnome.crossing.backend.db.DbOperation;
import com.gnome.crossing.backend.model.Game;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class GameService {

    @Autowired
    private DbOperation<Game> dbOperation;

    public List<Game> getGames() {
        return dbOperation.findAll();
    }

    public Game createGame(Game game) {
        return dbOperation.save(game);
    }
}
