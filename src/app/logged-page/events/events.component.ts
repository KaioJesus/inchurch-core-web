import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


export interface Events {
  id: number
  image: string;
  title: string;
  date: string
}

@Component({
  selector: 'app-events',
  imports:[FooterComponent, CommonModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private router = inject(Router);
  isCardView = false;

  allEvents = [
   {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=300&h=200&fit=crop',
    title: 'Deus é tudo na minha vida, mais preciso de duas linhas!',
    date: '21/09/2021 às 19h00'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop',
    title: 'Deus é tudo na minha vida, mais preciso de duas linhas!',
    date: '21/09/2021 às 19h00'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop',
    title: 'Deus é tudo na minha vida, mais preciso de duas linhas!',
    date: '21/09/2021 às 19h00'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop',
    title: 'Deus é tudo na minha vida, mais preciso de duas linhas!',
    date: '21/09/2021 às 19h00'
  },
];

  constructor() { }

  ngOnInit() {
  }

  toggleView(): void {
    this.isCardView = !this.isCardView;
      console.log(`eventos/details/${this.allEvents[0].id}`)
  }

    handleEditPlan(id: number) {
      console.log(`home/eventos/details/${id}`)
      this.router.navigate([
        'home/eventos/details/',
        id,
    ]);
    }

    handleDeletePlan(event: Events) {
      if (confirm(`Tem certeza que deseja excluir o plano "${event.title}"?`)) {
        this.allEvents = this.allEvents.filter(e => e.id !== event.id);
      }
    }

}
