import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //esto significa que el servicios se encuentra de manera global para toda la app
})
export class GifsService {

  private _historial : string []=[];

  get historial(){
    return [...this._historial]; //Rompe la referencia con el arreglo, por si se hace una modificación no afecte el arreglo
  }

  buscarGifs(query: string){
    this._historial.unshift(query ); //inserta un nuevo elemento al comienzo de un arreglo o lista
    

    console.log(this._historial);
  }


}
