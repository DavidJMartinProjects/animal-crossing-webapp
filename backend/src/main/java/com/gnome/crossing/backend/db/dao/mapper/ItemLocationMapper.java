package com.gnome.crossing.backend.db.dao.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gnome.crossing.backend.db.dao.model.ItemLocationEntity;
import com.gnome.crossing.backend.model.ItemLocation;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;

/**
 * @author davidjmartin
 */
@Slf4j
@Component
public class ItemLocationMapper {

    @Autowired
    private ModelMapper modelMapper;

    private ItemLocationMapper() {}

    public ItemLocation toDto(ItemLocationEntity itemLocationEntity) {
        log.debug("mapping customer entity with id: {} to dto.", itemLocationEntity.getId());
        return modelMapper.map(itemLocationEntity, ItemLocation.class);
    }

    public ItemLocationEntity toEntity(ItemLocation itemLocation) {
        log.debug("mapping itemLocation dto with to entity.");
        return modelMapper.map(itemLocation, ItemLocationEntity.class);
    }

}
