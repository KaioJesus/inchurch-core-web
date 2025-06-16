import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName = '';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  showUserMenu = false;

  constructor(private loginService: LoginService){
    const user = this.loginService.getCurrentUser();
    this.userName = user.name;
  }

  handleLogout() {
    this.showUserMenu = false;
    this.logout.emit();
  }

}
