import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    TechnicalSkillsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add this module
    NgbModule,
    AppRoutingModule // Add the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
