// education.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { EducationService } from '../education.service';
import { Candidate } from '../models/candidate';
import { Education } from '../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input()candidate:Candidate={
    id: 1,
    nombre: '',
    cargo: '',
    descripcion: '',
    foto: ''
  } ;
  education: Education[] = [];
  @Input() editar: boolean = false;
  editarLista:boolean=false;
  guardar:boolean=false;
  editarSave=false;

  constructor(private educationService: EducationService) { }

  async  ngOnInit()  {
    this.cargarEducacion();
  }
  async cargarEducacion()  {
  
        (await this.educationService.get(this.candidate.id)).subscribe((educationData:Education[]) => {
         this.education = educationData;
      });
    }

  agregarEducacion(): void {
    let newEducationItem:Education = { 
       id:0,
       tituloEstudiado :"",
       nombreInstituto: "",
       tipoEducacion: "",
       logoInstituto: "",
       fechaInicio: new Date(),
       fechaFin: new Date(),
       idAspirante: 1 
    };
    this.education.push(newEducationItem);
  }


async saveEducation() {
 
    (await this.educationService.putList(this.education)).subscribe(() => {
      console.log('editado educaction');
      this.editarSave=false;
      this.cargarEducacion();
    });
  
  }
  async deleteEducation(id: number) {
 
    (await this.educationService.delete(id)).subscribe(() => {
      console.log('elimino educaction');
      this.editarSave=false;
    });
  
  }
  eliminarEducacion(index: number,id:number): void {
    this.education.splice(index, 1);
    console.log(this.education);
    this.deleteEducation(id);
  }

}
