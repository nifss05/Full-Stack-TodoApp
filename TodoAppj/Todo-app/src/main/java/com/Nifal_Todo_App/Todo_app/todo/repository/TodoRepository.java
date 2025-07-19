package com.Nifal_Todo_App.Todo_app.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Nifal_Todo_App.Todo_app.todo.Todo;


public interface TodoRepository extends JpaRepository<Todo, Integer>{
	
	List<Todo> findByUsername(String username);

}