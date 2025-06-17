import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FilterComponent } from "./shared/filter/filter.component";


@Component({
  selector: 'app-logged-page',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterModule, FilterComponent],
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.css']
})
export class LoggedPageComponent implements OnInit{

  private router = inject(Router)
  isOpen: boolean = false;
  isCollapsed = true
  selectedTitle = 'Planos de leitura'
  selectedIcon = 'Início'
  sidebarOpen = false;
  activeFilters: string[] = [
    'Mulheres que não concluíram o plano',
    'Homens que não concluíram o plano'
  ];

  menuItems = [
    { icon: 'icons/inicio.svg', label: 'Início', url: 'home' },
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
    { icon: 'icons/home.svg', label: 'Tela inicial', url: 'home' },
    { icon: 'icons/opened-book.svg', label: 'Palavras', url: 'home' },
    { icon: 'icons/pencil.svg', label: 'Notícias', url: 'home' },
    { icon: 'icons/download.svg', label: 'Downloads', url: 'home' },
    { icon: 'icons/download.svg', label: 'Banner', url: 'home' },
    { icon: 'icons/download.svg', label: 'Push', url: 'home' },
    { icon: 'icons/download.svg', label: 'Paginas multiuso', url: 'home' },
    { icon: 'icons/book.svg', label: 'Plano de leitura', url: 'planos-de-leitura' },
    { icon: 'icons/videos.svg', label: 'Vídeos', url: 'home' },
    { icon: 'icons/download.svg', label: 'Sugestão de conteúdos', url: 'home' },
    { icon: 'icons/settings.svg', label: 'Configurações', url: 'home' },
  ];

  ngOnInit(): void {
    this.setTitleBar();
    this.router.events.subscribe(() => {
        this.setTitleBar();
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log(this.sidebarOpen)
  }

  setTitleBar(): void {
    const currentRoute = this.router.url.split('/').pop() || '';

    const mainMenuItem = this.menuItems.find(item => item.url === currentRoute);
    if (mainMenuItem) {
      this.selectedTitle = mainMenuItem.label;
      this.selectedIcon = mainMenuItem.icon;
      return;
    }
  }
}
