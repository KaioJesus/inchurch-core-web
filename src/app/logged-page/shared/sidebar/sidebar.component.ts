import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() menuItemClick = new EventEmitter<string>();

  menuItems = [
    { icon: 'icons/inicio.svg', label: 'Início', active: false },
    { icon: 'icons/pessoas.svg', label: 'Pessoas', active: false },
    { icon: 'icons/celulas.svg', label: 'Células', active: false },
    { icon: 'icons/oracoes.svg', label: 'Orações', active: false },
    { icon: 'icons/kids.svg', label: 'Kids', active: false },
    { icon: 'icons/conteudo.svg', label: 'Conteúdo', active: false },
    { icon: 'icons/ticket.svg', label: 'Eventos', active: false },
  ];

  menuItemsTwo = [
    { icon: 'icons/rocket.svg', label: 'Xmission', active: false },
    { icon: 'icons/store.svg', label: 'Loja', active: false },
  ];

  subMenuItems = [
    { label: 'Tela inicial', active: false },
    { label: 'Palavras', active: false },
    { label: 'Notícias', active: false },
    { label: 'Downloads', active: false },
    { label: 'Banner', active: false },
    { label: 'Push', active: false },
    { label: 'Paginas multiuso', active: false },
    { label: 'Plano de leitura', active: true },
    { label: 'Sugestão de conteúdos', active: true },
    { label: 'Configurações', active: true },
    // ... outros itens
  ];

  selectMenuItem(label: string) {
    // Resetar todos para inativo
    this.menuItems.forEach((item) => (item.active = false));
    this.subMenuItems.forEach((item) => (item.active = false));

    // Ativar o selecionado
    const menuItem = this.menuItems.find((item) => item.label === label);
    const subMenuItem = this.subMenuItems.find((item) => item.label === label);

    if (menuItem) menuItem.active = true;
    if (subMenuItem) subMenuItem.active = true;

    this.menuItemClick.emit(label);
  }
}
