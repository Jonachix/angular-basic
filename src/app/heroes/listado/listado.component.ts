import { HashLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'CapitanAmerica','MujerMaravilla'];
  heroeBorrado: string = '';

  borrarHeroe() { 
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
