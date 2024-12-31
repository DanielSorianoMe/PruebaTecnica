package com.example.taskmanagement.service;

import com.example.taskmanagement.model.Task;
import com.example.taskmanagement.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

class TaskServiceTest {

    private TaskRepository taskRepository;
    private TaskService taskService;

    @BeforeEach
    void setUp() {
        taskRepository = Mockito.mock(TaskRepository.class);
        taskService = new TaskService(taskRepository);
    }

    @Test
    void createTask_ShouldReturnCreatedTask() {
        Task task = new Task(null, "Title", "Description");
        Mockito.when(taskRepository.save(any(Task.class))).thenReturn(new Task(1L, "Title", "Description"));

        Task created = taskService.createTask(task);

        assertNotNull(created.getId());
        assertEquals("Title", created.getTitle());
        assertEquals("Description", created.getDescription());
    }

    @Test
    void getAllTasks_ShouldReturnListOfTasks() {
        Mockito.when(taskRepository.findAll()).thenReturn(List.of(
                new Task(1L, "Task1", "Desc1"),
                new Task(2L, "Task2", "Desc2")
        ));

        List<Task> tasks = taskService.getAllTasks();

        assertEquals(2, tasks.size());
    }

    @Test
    void deleteTask_ShouldNotThrowExceptions() {
        assertDoesNotThrow(() -> taskService.deleteTask(1L));
    }
}