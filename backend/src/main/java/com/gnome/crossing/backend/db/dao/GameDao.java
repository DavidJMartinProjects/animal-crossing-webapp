package com.gnome.crossing.backend.db.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gnome.crossing.backend.db.DbOperation;
import com.gnome.crossing.backend.db.dao.mapper.GameMapper;
import com.gnome.crossing.backend.db.dao.repository.GameRepository;
import com.gnome.crossing.backend.model.Game;
import lombok.extern.slf4j.Slf4j;


/**
 * @author davidjmartin
 */
@Slf4j
@Component
public class GameDao implements DbOperation<Game> {

    private static String CUSTOMER_ID_DOES_NOT_EXIST = "customer with id: %s does not exist.";

    @Autowired
    private GameMapper mapper;

    @Autowired
    private GameRepository gameRepository;

    @Override
    public List<Game> findAll() {
        log.info("fetching customers.");
        return gameRepository.findAll()
            .stream()
            .map(mapper::toDto)
            .collect(Collectors.toList());
    }

//    @Override
//    public Customer findById(long customerId) {
//        log.info("fetching game with id: {}.", customerId);
//        CustomerEntity entity = customerRepository.findById(customerId)
//            .orElseThrow(() -> new CustomerServiceException(String.format(CUSTOMER_ID_DOES_NOT_EXIST, customerId)));
//        return mapper.toDto(entity);
//    }
//
    @Override
    public Game save(Game game) {
        log.info("saving game with start date: {}.", game.getStartDate());
        return mapper.toDto(gameRepository.save(mapper.toEntity(game)));
    }
//
//    @Override
//    public Customer update(Customer customer) {
//        log.info("updating customer with id: {}.", customer.getId());
//        return mapper.toDto(customerRepository.save(mapper.toEntity(customer)));
//    }
//
//    @Override
//    public void deleteById(long customerId) {
//        log.info("deleting customer with id: {}.", customerId);
//        customerRepository.deleteById(customerId);
//    }
//
//    @Override
//    public void deleteAll() {
//        log.info("deleting all customers records.");
//        customerRepository.deleteAll();
//    }
//
//    @Override
//    public boolean isEmailRegistered(String email) {
//        return customerRepository.existsByEmail(email);
//    }

}