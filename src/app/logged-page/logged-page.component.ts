import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-logged-page',
  standalone: true,
  imports:[CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterModule
  ],
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.css']
})
export class LoggedPageComponent implements OnInit{

  private router = inject(Router)
  isOpen: boolean = false;
  isCollapsed = true
  selectedTitle = 'Planos de leitura'

  menuItems = [
    { icon: 'icons/inicio.svg', label: 'Início', url: '' },
    { icon: 'icons/pessoas.svg', label: 'Pessoas', url: 'pessoas' },
    { icon: 'icons/celulas.svg', label: 'Células', url: 'celulas' },
    { icon: 'icons/oracoes.svg', label: 'Orações', url: 'oracoes' },
    { icon: 'icons/kids.svg', label: 'Kids', url: 'kids' },
    { icon: 'icons/conteudo.svg', label: 'Conteúdo', url: 'conteudo' },
    { icon: 'icons/ticket.svg', label: 'Eventos', url: 'eventos' },
  ];

  menuItemsTwo = [
    { icon: 'icons/rocket.svg', label: 'Xmission', url: 'xmission' },
    { icon: 'icons/store.svg', label: 'Loja', url:'loja' },
  ];

  subMenuItems = [
    { label: 'Tela inicial', url: '' },
    { label: 'Palavras', url: '' },
    { label: 'Notícias', url: '' },
    { label: 'Downloads', url: '' },
    { label: 'Banner', url: '' },
    { label: 'Push', url: '' },
    { label: 'Paginas multiuso', url: '' },
    { label: 'Plano de leitura', url: 'planos-de-leitura' },
    { label: 'Sugestão de conteúdos', url: '' },
    { label: 'Configurações', url: '' },
  ];

  ngOnInit(): void {
      console.log(this.menuItems)
  }

  sidebarOpen = true;
  activeSection = 'planos-leitura'; // Seção ativa por padrão
  activeFilters: string[] = [
    'Mulheres que não concluíram o plano',
    'Homens que não concluíram o plano'
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  handleMenuClick(menuItem: string) {
    this.activeSection = menuItem;
    console.log('Seção ativa:', menuItem);
  }

  handleLogout() {
    localStorage.removeItem('token');
    // Redirecionar para login ou usar Router
    window.location.href = '/';
  }


  removeFilter(filter: string) {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
  }

  handleNewPlan() {
    console.log('Criar novo plano');
    // Navegar para formulário ou abrir modal
  }

   setTitleBar(): void {
    const url = this.router.url;

    if (url.endsWith('/eventos')) {
      this.selectedTitle = 'Eventos';
    } else if (url.endsWith('/planos-de-leitura')) {
      this.selectedTitle = 'Planos de leitura';
    }
  }

}
