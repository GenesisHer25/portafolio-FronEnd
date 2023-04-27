// src/app/components/project/project.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Candidate } from '../models/candidate';
import { Project } from '../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() candidate: Candidate = {
    id: 1,
    nombre: '',
    cargo: '',
    descripcion: '',
    foto: ''
  };
  projects: Project[] = [];
  editarSave: boolean = false;
  @Input() editar =false;
  constructor(private projectService: ProjectService) { }

  async ngOnInit() {
    this.loadProjects();
  }

  async loadProjects() {
    this.projectService.get(this.candidate.id).subscribe((projectsData: Project[]) => {
      this.projects = projectsData;
    });
  }

  addProject(): void {
    let newProjectItem: Project = {
      id: 0,
      nombreProyecto: "",
      fechaCreacion: new Date(),
      descripcion: "",
      link: "",
      idAspirante: this.candidate.id
    };
    this.projects.push(newProjectItem);
  }

  async saveProjects() {
    this.projectService.putList(this.projects).subscribe(() => {
      console.log('Projects updated');
      this.editarSave = false;
      this.loadProjects();
    });
  }

  async deleteProject(id: number) {
    this.projectService.delete(id).subscribe(() => {
      console.log('Project deleted');
      this.loadProjects();
    });
  }

  removeProject(index: number, id: number): void {
    this.projects.splice(index, 1);
    this.deleteProject(id);
  }
}
