package com.gnome.crossing.backend.db.dao.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
public class ItemLocationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    private String imageUrl;
    private String description;

    private String location;

    @OneToMany(targetEntity = KeywordEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="locationKeyword_fk",referencedColumnName = "id")
    private Set<KeywordEntity> locationKeywords;

}
