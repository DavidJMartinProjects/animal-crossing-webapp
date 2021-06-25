package com.gnome.crossing.backend.db.dao.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author davidjmartin
 */
@Entity
@Table
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private String startDate;
    private String description;

    @OneToMany(targetEntity = PlayerEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="player_fk",referencedColumnName = "id")
    private Set<PlayerEntity> players;

    @OneToMany(targetEntity = ItemLocationEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="itemLocation_fk",referencedColumnName = "id")
    private Set<ItemLocationEntity> itemLocations;

    @OneToMany(targetEntity = StartTimeEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="startTime_fk",referencedColumnName = "id")
    private Set<StartTimeEntity> startTimes;

}
