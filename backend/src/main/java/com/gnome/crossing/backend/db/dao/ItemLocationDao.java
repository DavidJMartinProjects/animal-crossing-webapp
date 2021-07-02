package com.gnome.crossing.backend.db.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gnome.crossing.backend.db.DbOperation;
import com.gnome.crossing.backend.db.dao.mapper.ItemLocationMapper;
import com.gnome.crossing.backend.db.dao.repository.ItemLocationRespository;
import com.gnome.crossing.backend.model.ItemLocation;
import lombok.extern.slf4j.Slf4j;


/**
 * @author davidjmartin
 */
@Slf4j
@Component
public class ItemLocationDao implements DbOperation<ItemLocation> {

    private static String CUSTOMER_ID_DOES_NOT_EXIST = "customer with id: %s does not exist.";

    @Autowired
    private ItemLocationMapper mapper;

    @Autowired
    private ItemLocationRespository itemLocationRespository;

    @Override
    public List<ItemLocation> findAll() {
        log.info("fetching customers.");
        return itemLocationRespository.findAll()
            .stream()
            .map(mapper::toDto)
            .collect(Collectors.toList());
    }

    @Override
    public ItemLocation save(ItemLocation itemLocation) {
        log.info("saving itemLocation with desc: {}.", itemLocation.getDescription());
        return mapper.toDto(itemLocationRespository.save(mapper.toEntity(itemLocation)));
    }

    @Override
    public void deleteById(long customerId) {
        log.info("deleting customer with id: {}.", customerId);
        itemLocationRespository.deleteById(customerId);
    }

}