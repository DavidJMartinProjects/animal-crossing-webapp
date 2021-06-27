package com.gnome.crossing.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gnome.crossing.backend.model.Game;
import com.gnome.crossing.backend.service.GameService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(GameController.GAMES_PATH)
@Slf4j
public class GameController {

    public static final String GAMES_PATH = "/games";

    @Autowired
    private GameService gameService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Game> getGames() {
        return gameService.getGames();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Game createGame(Game game) {
        return gameService.createGame(game);

    }

}
