package com.example.taskmanagement.repository;

import com.example.taskmanagement.model.Task;
import java.util.List;

public interface TaskRepository {
    Task save(Task task);
    List<Task> findAll();
    void deleteById(Long id);
}