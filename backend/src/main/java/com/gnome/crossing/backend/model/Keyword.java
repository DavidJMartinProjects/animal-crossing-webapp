package com.gnome.crossing.backend.model;

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
public class Keyword {

    private Long id;

    private String keyword;

}
