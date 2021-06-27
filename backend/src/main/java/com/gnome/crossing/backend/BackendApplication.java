package com.gnome.crossing.backend;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gnome.crossing.backend.db.DbOperation;
import com.gnome.crossing.backend.db.dao.repository.GameRepository;
import com.gnome.crossing.backend.db.dao.repository.ItemLocationRespository;
import com.gnome.crossing.backend.model.Game;
import com.gnome.crossing.backend.model.ItemLocation;
import com.gnome.crossing.backend.model.Keyword;
import com.gnome.crossing.backend.model.Player;
import com.gnome.crossing.backend.model.StartTime;
import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private DbOperation<Game> gameDbOperation;

	@Autowired
	private DbOperation<ItemLocation> itemLocationDbOperation;

	@Bean
	public CommandLineRunner mappingDemo(GameRepository gameRepository, ItemLocationRespository itemLocationRespository) {
		return args -> {

			Keyword keyword1 = Keyword.builder()
				.keyword("statue")
				.build();

			Keyword keyword2 = Keyword.builder()
				.keyword("red tree")
				.build();

			Keyword keyword3 = Keyword.builder()
				.keyword("pathway")
				.build();

			Keyword keyword4 = Keyword.builder()
				.keyword("well")
				.build();

			ItemLocation itemLocation = ItemLocation.builder()
				.imageUrl("rebelGnomeBlack.png")
				.location("behind the statue, next to the red tree.")
				.locationKeywords(Collections.unmodifiableList(Arrays.asList(keyword1, keyword2)))
				.description("happy red gnome")
				.build();

			ItemLocation itemLocation2 = ItemLocation.builder()
				.imageUrl("passionateGnomeRed.png")
				.location("by the yellow pathway, next to well.")
				.locationKeywords(Collections.unmodifiableList(Arrays.asList(keyword3, keyword4)))
				.description("smiley green gnome")
				.build();

			StartTime startTime1 = StartTime.builder()
				.startTime("08:00:00")
				.build();

			StartTime startTime2 = StartTime.builder()
				.startTime("09:00:00")
				.build();

			StartTime startTime3 = StartTime.builder()
				.startTime("10:00:00")
				.build();

			Player player1 = Player.builder()
				.ign("Princess_xXx")
				.redditUsername("V_v_V")
				.islandName("Island of Love")
				.build();

			Player player2 = Player.builder()
				.ign("Thor_Alpha")
				.redditUsername("M_m_M")
				.islandName("Howyez luv island")
				.build();

			Player player3 = Player.builder()
				.ign("DUU_BE_DUU_LAD")
				.redditUsername("V_v_V")
				.islandName("Duu be duu land")
				.build();

			// create new game
			Game game1 = Game.builder()
				.itemLocations(Collections.unmodifiableList(Arrays.asList(itemLocation, itemLocation2)))
				.startDate("2021-11-18")
				.description("Clearing out my lil pony collection")
				.startTimes(Collections.unmodifiableList(Arrays.asList(startTime1, startTime2, startTime3)))
				.players(Collections.unmodifiableList(Arrays.asList(player1, player2, player3)))
				.build();

			Game game2 = Game.builder()
				.itemLocations(Collections.unmodifiableList(Arrays.asList(itemLocation, itemLocation2)))
				.startDate("2020-07-14")
				.description("Saturday Clearout Special")
				.startTimes(Collections.unmodifiableList(Arrays.asList(startTime1, startTime2, startTime3)))
				.players(Collections.unmodifiableList(Arrays.asList(player1, player2, player3)))
				.build();

			Game game3 = Game.builder()
				.itemLocations(Collections.unmodifiableList(Arrays.asList(itemLocation, itemLocation2)))
				.startDate("2018-01-01")
				.description("Special Surprise Game")
				.startTimes(Collections.unmodifiableList(Arrays.asList(startTime1, startTime2, startTime3)))
				.players(Collections.unmodifiableList(Arrays.asList(player1, player2, player3)))
				.build();

			// save default game
			gameDbOperation.save(game1);
			gameDbOperation.save(game2);
			gameDbOperation.save(game3);
			log.info("success: saved default games.");
		};

	}

}
