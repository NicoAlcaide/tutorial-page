// Modificado Nico

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ContentComponent, FooterComponent] // Asegúrate de importar los componentes aquí
})
export class AppComponent {
  title = 'tutorial-page';
}


