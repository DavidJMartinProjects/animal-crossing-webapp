package com.gnome.crossing.backend.model;

import java.util.List;

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
public class ItemLocation {

    private Long id;

    private String imageUrl;
    private String description;
    private String location;

    private List<Keyword> locationKeywords;

}
