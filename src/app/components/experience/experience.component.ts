// experience.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  mission?: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
      imports: [CommonModule]
  
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'Objectware',
      position: 'CDI (Ingénieur d\'étude et développement informatique)',
      period: 'Juillet 2022 - Aujourd\'hui',
      mission: 'Mission "CGI" France Travail (ex Pole emplois) :',
      tasks: [
        'Maintenance des anciennes pipelines.',
        'Ajout et intégration des nouvelles Gateways et pipelines.',
        'Réaliser et participer à la mise en prod des gateways.',
        'Intégrer le projet QrCode sur les différents environnements de test.',
        'Dockerisation des projets liés au QrCode.',
        'Mise en prod du projet QrCode.',
        'Maintenance et développement des nouvelles fonctionnalités sur le projet QrCode (java / Angular, gateway sécurisée, gateway non sécurisée ...)',
        'Création des pipelines concourse pour QrCode (gateway sécurisée, gateway non sécurisée, backend, frontend)',
        'Participation aux différentes briques du Scrum (animation retro / démo ...).',
        'Développement de la refonte d\'un ancien outil de Pushnotification (Création du socle et dockerisation)',
        'Intégration et évolution d\'un ancien projet (serveur des bouchons) qui permet aux développeurs et testeurs d\'alimenter les applications mobiles par des données de test. (Java, kubernetes (kustomize et helm), AWS bucket S3, Angular JS, Spring cloud, Spring gateway, Concourse, docker)',
        'Migration des collections de test Postman vers Hoppscotch.',
        'Migration d\'outil de gestion des secrets (vault vers Conjur).'
      ]
    },
    {
      company: 'VERMEG for Banking & Insurance Software',
      position: 'Software Developer',
      period: 'Janvier 2019 - Mai 2022',
      tasks: [
        'Gestion et configuration des différents outils et plateformes DevOps utilisés dans la chaîne CI/CD :',
        'Assurer le bon fonctionnement des VMs',
        'Gestion des utilisateurs et des accès pour Gitlab, Jenkins, Nexus, Sonar, SVN',
        'Installation et configuration des Runners Gitlab',
        'Gestion des tests et rules Sonar',
        'Ajout des images docker dans un hub privé',
        'Gestion et création des pipelines d\'automatisation et de CI/CD (Gitlab, Jenkins)',
        'Installation et configuration des nouveaux clients nexus en gérant les accès et les repositories.',
        'Gestion des Nexus internes Dev & Prod',
        'Développement et maintenance des programmes Java en implémentant les APIs gitlab4j (API Gitlab Java), Jira, Plugins Maven, Plugins interne sous Eclipse, modules internes d\'un Framework propriétaire',
        'Installation côté système des outils et technologies nécessaires pour les plateformes d\'automatisation sous Linux Centos et Windows',
        'Migration d\'une ancienne version d\'un Framework propriétaire (Ant / SVN to Maven / Gitlab)',
        'Migration du JDK supporté par un Framework propriétaire vers open adoptjdk11',
        'Automatisation de l\'exécution des tests automatiques',
        'Formation et intégration des nouvelles recrues de l\'équipe DevOps'
      ]
    },
    {
      company: 'Freelance',
      position: 'web developer',
      period: 'Séptembre 2018- Décembre',
      tasks: [
        'Site web avec le CMS Wordpress et Elementor : www.frontlineprods.com / nda.org.ly',
        
      ]
        },

        {
          company: 'Freelance',
          position: 'web developer',
          period: 'Mai 2018 - Aout 2018',
          tasks: [
            'Site web vitrine : www.pro2sante.com / www.cscs.com',
            
          ]
            },
            {
              company: 'Formalab',
              position: 'Formateur ',
              period: 'Juillet 2017 - Aout 2018',
              tasks: [
                'Assurer des Workshops et formations (HTML/CSS/JS, Spring Boot, JEE, UX/UI Adobe XD)',
                
              ]
                },
                {
                  company: 'UIB - Groupe Société Générale',
                  position: 'Stage',
                  period: 'Janvier 2018 - Mai 2018 ',
                  tasks: [
                    "Stage de fin d'études : Développement d'une plateforme web et mobile d'octroi de microcrédits (Mention très bien) ",
                    " Technologies : JEE/Spring Boot, Angular, Bootstrap, JWT, Apache Cordova, MySql"
                  ]
                    } ,    
                    
                    {
                      company: 'UIB - Groupe Société Générale',
                      position: 'Stage',
                      period: 'Juillet 2017 - Aout 2017 (Stage d’été) ',
                      tasks: [
                        "Stage d’été: Développement d'une application d'acquisition de nouveaux matériels.",
                        " Technologies : Java/J2ee, Hibernate, Jsf, Bootstrap, Mysql"
                      ]
                        } 
  ];

  constructor() { }

  ngOnInit(): void {
  }
}




