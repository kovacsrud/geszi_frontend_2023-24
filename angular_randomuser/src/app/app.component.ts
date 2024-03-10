import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectComponent } from './components/select/select.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SelectComponent,UserlistComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomuser_angular';
}
