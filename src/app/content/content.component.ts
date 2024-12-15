// Modificado Nico


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  imports: [RouterOutlet] // Importar RouterOutlet aquí
})
export class ContentComponent {}
