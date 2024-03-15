import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  ventanaSeleccionada: string | null = null;

  mostrarVentana(idVentana: string) {
    this.ventanaSeleccionada = idVentana;
  }
}
