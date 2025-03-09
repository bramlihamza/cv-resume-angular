// skills.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss'],
        imports: [CommonModule]
  
})
export class TechnicalSkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'Langages de Programmation',
      skills: [
        'Java', 
        'JavaScript/TypeScript', 
        'HTML/CSS', 
        'SQL',
        
      ]
    },
    {
      category: 'Frameworks & Bibliothèques',
      skills: [
        'Spring Boot',
        'Angular',
        'Spring Cloud',
        'Spring Gateway',
        'JUnit',
        'Hibernate',
        
      ]
    },
    {
      category: 'DevOps & Outils',
      skills: [
        'Docker',
        'Kubernetes (Kustomize, Helm)',
        'Jenkins',
        'GitLab CI/CD',
        'Concourse',
        'AWS',
        'Nexus',
        'Sonar',
        'Git/SVN',
        'Maven/Gradle'
      ]
    },
    {
      category: 'Base de Données',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Oracle'
      ]
    },
    {
      category: 'Méthodologies',
      skills: [
        'Scrum',
        'Agile',
        'TDD',
  
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}