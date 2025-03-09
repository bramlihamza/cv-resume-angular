// profile.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
        imports: [CommonModule]
  
})
export class ProfileComponent implements OnInit {
  profile = {
    name: 'Bramli Hamza',
    title: 'Ingénieur Java/Devops',
    summary: "Actuellement Ingénieur informatique chez Objectware, je suis passionné par le monde Devops et développement web (Java Spring Angular)",
    contact: {
      email: 'hamza_bramli@outlook.fr',
      phone: '+33 6 12 34 56 78',
      location: 'Bordeaux, France',
      linkedin: 'linkedin.com/in/hamza-bramli'
    },
    skills: [
      'Java', 'Angular', 'Spring Boot', 'Docker', 'Kubernetes',
      'CI/CD', 'GitLab CI', 'Jenkins', 'AWS', 'DevOps',
      'Microservices', 'API Gateway', 'Concourse', 'Maven'
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
