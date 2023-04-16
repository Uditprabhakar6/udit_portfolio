import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udit_portfolio';
  items!: MenuItem[];



  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'About us', icon: 'pi pi-info-circle' },
      { label: 'Resume', icon: 'pi pi-file-o' },
      { label: 'Skills', icon: 'pi pi-palette' },
      { label: 'Projects', icon: 'pi pi-github' },
      { label: 'My Blog', icon:'pi pi-book'},
      { label: 'Contact', icon:'pi pi-phone'}
    ];

  }
}
