import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

  finalizado = 'Secundario Completo: Orientación en Ciencias Sociales Instituto Gral. San Martin (Villa Allende).'
  programacion = 'Curso de Programación Inicial: Realizado en la UTN- REG y CoderHouse. En proceso Curso de Angular 17. Academia Digital UDEMY.';
  cursando = 'Licenciatura en Comunicación Social: En proceso, Universidad Nacional de Córdoba UNC.';


}
