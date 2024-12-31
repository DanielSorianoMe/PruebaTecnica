import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  message: string = '';      // Mostrará mensaje de éxito o error
  isError: boolean = false;  // Para controlar estilo de error

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        this.message = 'Error al cargar tareas.';
        this.isError = true;
        console.error(err);
      }
    });
  }

  deleteTask(id?: number): void {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        // Elimina la tarea del array local
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.message = 'Tarea eliminada correctamente.';
        this.isError = false;
      },
      error: (err) => {
        this.message = 'Error al eliminar tarea.';
        this.isError = true;
        console.error(err);
      }
    });
  }
}
