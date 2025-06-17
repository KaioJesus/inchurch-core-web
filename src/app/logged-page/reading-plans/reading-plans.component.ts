import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { Router } from '@angular/router';

export interface Plan {
  id: number;
  title: string;
  readings: number;
  publishedTo: string;
  totalReaders: number | null;
  image: string;
}

@Component({
  selector: 'app-reading-plans',
  standalone: true,
  imports:[CommonModule, FooterComponent],
  templateUrl: './reading-plans.component.html',
  styleUrls: ['./reading-plans.component.css'],
})
export class ReadingPlansComponent implements OnInit {
  private router = inject(Router);
  isCardView = false;

  // Dados mockados
  allPlans: Plan[] = [
    {
      id: 1,
      title: 'O significado dos principais nomes da bíblia',
      readings: 31,
      publishedTo: 'Igreja local: Yeshua',
      totalReaders: 1230,
      image: '📖',
    },
    {
      id: 2,
      title: 'Versículos bíblicos para combater a ansiedade',
      readings: 28,
      publishedTo: 'Denominação',
      totalReaders: 15,
      image: '📝',
    },
    {
      id: 3,
      title: 'Como ouvir a voz de Deus?',
      readings: 5,
      publishedTo: 'Igreja local: Yeshua',
      totalReaders: null, // Representando o "-" como nulo
      image: '🎧',
    },
    {
      id: 4,
      title: 'As acusações levantadas contra Jesus',
      readings: 15,
      publishedTo: 'Denominação',
      totalReaders: 345,
      image: '⚖️',
    },
  ];

  filteredPlans = [...this.allPlans];

  constructor() {}

  ngOnInit() {}

  toggleView(): void {
    this.isCardView = !this.isCardView;
  }

   handleEditPlan(id: number) {
      this.router.navigate([
        'home/planos-de-leitura/details/',
        id,
    ]);
  }

  handleDeletePlan(plan: Plan) {
    if (confirm(`Tem certeza que deseja excluir o plano "${plan.title}"?`)) {
      this.allPlans = this.allPlans.filter(p => p.id !== plan.id);
    }
  }
}
