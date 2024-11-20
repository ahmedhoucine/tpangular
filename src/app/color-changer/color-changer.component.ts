import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  imports: [],
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.css'
})
export class ColorChangerComponent {
  defaultColor: string = 'white'; // Couleur par défaut du div
  currentColor: string = this.defaultColor;

  // Met à jour la couleur en fonction de l'entrée utilisateur
  changeColor(color: string) {
    this.currentColor = color;
  }

  // Réinitialise à la couleur par défaut
  resetColor() {
    this.currentColor = this.defaultColor;
  }
}
