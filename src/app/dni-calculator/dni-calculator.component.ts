import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dni-calculator',
  templateUrl: './dni-calculator.component.html',
  styleUrls: ['./dni-calculator.component.css'],
  imports: [FormsModule] // Importa FormsModule aquí
})
export class DniCalculatorComponent {
  dni: string = '';

  calculateLetter() {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniNumber = parseInt(this.dni, 10);
    const letter = letters[dniNumber % 23];
    console.log('La letra es:', letter);
  }
}

