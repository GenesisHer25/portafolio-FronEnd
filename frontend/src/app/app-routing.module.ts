import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from 'src/app/candidate/candidate.component'
const routes: Routes = [

  {path: 'candidate', component: CandidateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
