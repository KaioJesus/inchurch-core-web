import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FilterComponent } from './shared/filter/filter.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-logged-page',
  standalone: true,
  imports:[CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    ToolbarComponent,
    FilterComponent,
    FooterComponent
  ],
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.css']
})
export class LoggedPageComponent {

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

}
