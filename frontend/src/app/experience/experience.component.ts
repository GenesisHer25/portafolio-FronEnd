// experience.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Candidate } from '../models/candidate';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() candidate: Candidate = {
    id: 1,
    nombre: '',
    cargo: '',
    descripcion: '',
    foto: '',
  };
  experience: Experience[] = [];
  editarSave = false;
  @Input() editar=false;
  constructor(private experienceService: ExperienceService) {}

  async ngOnInit() {
    this.loadExperience();
  }

  async loadExperience() {
    (
      await this.experienceService.get(this.candidate.id)
    ).subscribe((experienceData: Experience[]) => {
      this.experience = experienceData;
    });
  }

  agregarExperience(): void {
    let newExperienceItem: Experience = {
      id:0, 
      cargo:"",
      descCargo:"", 
      nombreEmpresa:"",
      logoEmpresa: "", 
      fechaInicio: new Date(),
      fechaFin: new Date(),
      idAspirante:1 
    };
    this.experience.push(newExperienceItem);
  }

  async saveExperience() {
    (
      await this.experienceService.putList(this.experience)
    ).subscribe(() => {
      console.log('editado experiencia');
      this.editarSave = false
      this.loadExperience();
    });
  }

  async deleteExperience(id: number) {
  (await this.experienceService.delete(id)).subscribe(() => {
  console.log('eliminada experiencia');
  this.editarSave = false;
  });
  }
  
  eliminarExperience(index: number, id: number): void {
  this.experience.splice(index, 1);
  console.log(this.experience);
  this.deleteExperience(id);
  }
  }
  
  