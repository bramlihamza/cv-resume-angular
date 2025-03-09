import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // If you're using standalone components
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  constructor(private router: Router) {}
  
// components/sidebar/sidebar.component.ts
isActive(route: string): boolean {
  return this.router.url === '/' + route || this.router.url === route;
}

}

