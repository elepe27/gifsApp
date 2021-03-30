import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBusqueda')txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){ //llamamos a nuestro servicio desde el constructor del componente

  }
  buscar(){
    const value = this.txtBuscar.nativeElement.value;
    
    this.gifsService.buscarGifs(value); //se manda el valor a la función del servicio

    this.txtBuscar.nativeElement.value = '';
  }

}
