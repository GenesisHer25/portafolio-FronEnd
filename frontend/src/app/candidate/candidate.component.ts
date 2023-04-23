import { Component, OnInit } from '@angular/core';
import { CandidateService} from 'src/app/candidate.service'
import { candidate } from '../models/candidate';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(
    private  _candidateService:CandidateService
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

/*
  clickButton(){
    this.candidateService.getAll().then(data=>console.log(data));
  }
*/
}
