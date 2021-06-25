package com.gnome.crossing.backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author davidjmartin
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder({ "id", "description", "startDate", "startTimes", "itemLocations", "players" })
public class Game {

    private long id;

    private String startDate;
    private String description;

    private List<Player> players;

    private List<ItemLocation> itemLocations;

    private List<StartTime> startTimes;

}
