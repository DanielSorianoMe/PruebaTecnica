package com.example.taskmanagement.repository;

import com.example.taskmanagement.model.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class InMemoryTaskRepository implements TaskRepository {

    private final List<Task> tasks = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);

    @Override
    public Task save(Task task) {
        // Asigna un ID si no existe
        if (task.getId() == null) {
            task.setId(counter.getAndIncrement());
        }
        tasks.add(task);
        return task;
    }

    @Override
    public List<Task> findAll() {
        return new ArrayList<>(tasks);
    }

    @Override
    public void deleteById(Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}