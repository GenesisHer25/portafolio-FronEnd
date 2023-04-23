import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AbilityComponent } from './ability/ability.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ImageComponent } from './image/image.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    CandidateComponent,
    AbilityComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectComponent,
    ImageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
