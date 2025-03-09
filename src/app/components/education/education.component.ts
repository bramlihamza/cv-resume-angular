// education.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
   imports: [CommonModule]
})
export class EducationComponent implements OnInit {
  educations: Education[] = [
    {
      institution: 'Université Sesame',
      degree: "Diplôme d'ingénieur, Ingénierie informatique",
      period: 'Janvier 2018 - Septembre 2022',
      details: [
        'Formation axée sur le développement de logiciels, les architectures distribuées et les méthodologies agiles',
        'Projet de fin d\'études : Développement d\'une plateforme de dockerisation des logiciels Java',
        'Mention Très Bien, classé parmi les 10% meilleurs étudiants',
        'Cours principaux : Architectures Logicielles,,JAVA, Systèmes Distribués, DevOps, Développement Web Avancé'
      ]
    },
    {
      institution: 'Institut Supérieur des Arts Multimédia de la Manouba(ISAMM)',
      degree: 'Licence fondamentale, Informatique et Multimédia',
      period: 'Septembre 2014 - Juin 2018',
      details: [
        'Formation généraliste en informatique couvrant les fondamentaux de la programmation',
        'Spécialisation en développement d\'applications et systèmes d\'information',
        'Projet académique : Conception et implémentation d\'une application d\'octroie des microcredits',
        'Stage de fin d\'études chez Tech Solutions (3 mois)'
      ]
    },
    {
      institution: 'Lycée International',
      degree: 'Baccalauréat Scientifique, Option Mathématiques',
      period: '2011 - 2014',
      details: [
        'Mention Bien',
        'Participation aux Olympiades de Mathématiques',
        'Option informatique'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}