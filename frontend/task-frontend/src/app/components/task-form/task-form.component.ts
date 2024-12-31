import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; // <--- Importa RouterModule y Router
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  standalone: true,
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class TaskFormComponent {
  task: Task = { title: '', description: '' };

  message: string = '';
  isError: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask() {
    if (!this.task.title.trim() || !this.task.description.trim()) {
      this.message = 'Todos los campos son obligatorios.';
      this.isError = true;
      return;
    }

    this.taskService.createTask(this.task).subscribe({
      next: (createdTask) => {
        this.message = `Tarea "${createdTask.title}" creada con éxito.`;
        this.isError = false;

        // Redirige a /tasks
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error al crear la tarea.';
        this.isError = true;
      }
    });
  }
}
