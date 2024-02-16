import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule, ExperienciaLaboralComponent, EducacionComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'practicando-angular';
}


