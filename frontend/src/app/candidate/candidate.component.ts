import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../models/candidate';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidateId = 1;
  candidate: Candidate = {
    id: 0,
    nombre: '',
    cargo: '',
    descripcion: '',
    foto: ''
  };

  editar: boolean = false;
  editarSave: boolean = false;
  imageSrc: string = 'assets/default-avatar.jpeg';

  constructor(private router: Router, private route: ActivatedRoute,private candidateService: CandidateService) {}

  async ngOnInit() {
    
  this.route.params.subscribe(params => {
    
    if(params['editar']=='true')
    {
      this.editar=true;

    }
 });



    (await this.candidateService.get(this.candidateId)).subscribe((candidate: Candidate) => {
      console.log(candidate)
      this.candidate = candidate;
    });
  }

  cargarImagen(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async editCandidate() {
    this.editarSave = true;
    this.editar = true;
  }

  async saveCandidate() {
    this.editarSave = false;
    this.candidate.foto = this.imageSrc;

    (await this.candidateService.put(this.candidate)).subscribe(() => {
      console.log('Candidate edited');
    });
  }
}
