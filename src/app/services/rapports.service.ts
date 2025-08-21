import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Report } from '../component/stagiaire/my-reports/my-reports.component';

@Injectable({
  providedIn: 'root'
})

export class RapportsService {

  constructor() { }

  getReports(id?: number): Report[] {
    if (id) {
      const report = this.reports.find(r => r.id == id);
      return report ? [report] : []
    } else {
      return this.reports
    }
  }

  addReports(report: Report) {
    this.reports.push(report);
  }

  deleteReport(id: number) {
    this.reports = this.reports.filter(r => r.id !== id);
  }

  updateReport(report: Report): boolean {
    const index = this.reports.findIndex(r => r.id = report.id)
    if (index != -1) {
      this.reports[index] = report;
      return true;
    } else {
      return false;
    }
  }

  reports: Report[] = [
    {
      id: 1,
      authorName: "Michel Keuni",
      title: "Rapport semaine 1 - Développement",
      submissionDate: new Date("2025-08-01"),
      department: "Informatique",
      objectifsList: [
        {
          id: 101,
          title: "Mise en place du projet",
          description: "Initialiser le projet Angular avec la configuration de base.",
          Type: "Journalier",
          statut: true
        },
        {
          id: 102,
          title: "Connexion backend",
          description: "Configurer Django et établir la communication via API REST.",
          Type: "Hebdomadaire",
          Commentaire: "Problèmes CORS réglés en fin de semaine.",
          statut: true
        }
      ]
    },
    {
      id: 2,
      authorName: "Alice Nguema",
      title: "Rapport marketing - Campagne Août",
      submissionDate: new Date("2025-08-05"),
      department: "Marketing",
      objectifsList: [
        {
          id: 201,
          title: "Analyse concurrentielle",
          description: "Étudier la stratégie des concurrents directs sur Instagram.",
          Type: "Hebdomadaire",
          statut: true
        },
        {
          id: 202,
          title: "Création de contenus",
          description: "Préparer 10 visuels pour la campagne sponsorisée.",
          Type: "Journalier",
          statut: false
        },
        {
          id: 2103,
          title: "Validation interne",
          description: "Soumettre les visuels au manager pour validation.",
          Type: "Journalier",
          statut: false
        }
      ]
    },
    {
      id: 9,
      authorName: "Michel Keuni",
      title: "Rapport semaine 11 - Développement de l'app",
      submissionDate: new Date("2025-08-01"),
      department: "Informatique",
      objectifsList: [
        {
          id: 1301,
          title: "Mise en place du projet",
          description: "Initialiser le projet Angular avec la configuration de base.",
          Type: "Journalier",
          statut: true
        },
        {
          id: 202,
          title: "Connexion backend",
          description: "Configurer Django et établir la communication via API REST.",
          Type: "Hebdomadaire",
          Commentaire: "Problèmes CORS réglés en fin de semaine.",
          statut: true
        }
      ]
    },
    {
      id: 3,
      authorName: "Jean Talla",
      title: "Rapport semaine 2 - Backend",
      submissionDate: new Date("2025-08-10"),
      department: "Informatique",
      objectifsList: [
        {
          id: 301,
          title: "Optimisation base de données",
          description: "Refactoriser les modèles pour améliorer la vitesse d’exécution.",
          Type: "Hebdomadaire",
          statut: true
        }
      ]
    },
    {
      id: 4,
      authorName: "Sandra Mbianda",
      title: "Rapport semaine 3 - Déploiement",
      submissionDate: new Date("2025-08-15"),
      department: "Informatique",
      objectifsList: [
        {
          id: 401,
          title: "Préparation serveur",
          description: "Configurer l’environnement de staging sur AWS.",
          Type: "Journalier",
          statut: true
        },
        {
          id: 402,
          title: "CI/CD",
          description: "Mettre en place GitHub Actions pour automatiser le déploiement.",
          Type: "Hebdomadaire",
          statut: true
        },
        {
          id: 403,
          title: "Tests utilisateurs",
          description: "Faire tester la plateforme par un petit groupe pilote.",
          Type: "Hebdomadaire",
          Commentaire: "Quelques bugs mineurs détectés.",
          statut: false
        },
        {
          id: 404,
          title: "Correction bugs",
          description: "Corriger les retours du test utilisateur.",
          Type: "Journalier",
          statut: false
        }
      ]
    },
    {
      id: 5,
      authorName: "Pauline Kouassi",
      title: "Rapport marketing - Salon professionnel",
      submissionDate: new Date("2025-08-20"),
      department: "Marketing",
      objectifsList: [
        {
          id: 501,
          title: "Préparation stand",
          description: "Commander les supports de communication et préparer la logistique.",
          Type: "Hebdomadaire",
          statut: true
        },
        {
          id: 502,
          title: "Prospection",
          description: "Contacter 20 entreprises cibles pour prise de rendez-vous.",
          Type: "Journalier",
          statut: false
        },
        {
          id: 503,
          title: "Campagne email",
          description: "Envoyer une newsletter annonçant notre présence.",
          Type: "Journalier",
          statut: true
        },
        {
          id: 504,
          title: "Évaluation",
          description: "Rédiger un rapport d’évaluation post-événement.",
          Type: "Hebdomadaire",
          statut: false
        },
        {
          id: 505,
          title: "Suivi prospects",
          description: "Relancer les contacts pris pendant le salon.",
          Type: "Journalier",
          statut: false
        }
      ]
    }
  ];
}