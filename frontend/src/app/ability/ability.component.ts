// ability.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { AbilityService } from '../ability.service';
import { Ability } from '../models/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilities: Ability[] = [];
  candidateId = 1;
  @Input() editar=false;
  editing = false;

  constructor(private abilityService: AbilityService) {}

 async  ngOnInit()   {
   this.cargarAbility();
  }
  async cargarAbility()  {
  
    (await this.abilityService.get(this.candidateId)).subscribe((abilities: Ability[]) => {
      this.abilities = abilities;
    });   
}
  editAbilities() {
    this.editing = true;
  }
  addAbility() {
    const newAbility: Ability = {
      id:0, 
      nombreHabilidad: "",
      tipoHabilidad: "",
      porcentaje: 0,
      idAspirante: 1,
    };
    this.abilities.push(newAbility);
  }

  saveAbilities() {
    this.editing = false;
    this.abilityService.saveAll(this.abilities).subscribe(() => {
        this.editing=false;
        console.log('Ability updated');
    });
  }

  eliminarAbility(index: number, id: number){
     this.abilities.splice(index, 1);
     this.deleteAbility(id);

  }
  async deleteAbility(id: number) {
      (await this.abilityService.delete(id)).subscribe(() => {
      console.log('eliminada experiencia');
      this.editing = false;
      });
    }

}
