import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent  {

  get resultados(){
    return this.gifsService.resultados; //retornamos la lista de resultados
  }

  constructor(private gifsService : GifsService) { }



}
