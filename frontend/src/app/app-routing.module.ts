import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from 'src/app/candidate/candidate.component'
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: CandidateComponent},
  { path: 'login', component: UserComponent },
  {path: 'candidate', component: CandidateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
