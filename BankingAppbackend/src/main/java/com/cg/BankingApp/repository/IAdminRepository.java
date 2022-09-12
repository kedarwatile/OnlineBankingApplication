package com.cg.BankingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.BankingApp.entity.Admin;
@Repository
public interface IAdminRepository extends JpaRepository<Admin,Integer> {

}
