import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //esto significa que el servicios se encuentra de manera global para toda la app
})
export class GifsService {

  private _historial : string []=[];

  get historial(){
    // this._historial = this._historial.splice(0,10);
    return [...this._historial]; //Rompe la referencia con el arreglo, por si se hace una modificación no afecte el arreglo
  }

  buscarGifs(query: string=''){
    query = query.trim().toLowerCase(); //pasa toda la query a minuscula

     //inserta un nuevo elemento al comienzo de un arreglo o lista
    
    if (!this._historial.includes(query)) { // si no incluye el elemento, entonces lo va a insertar '!'
      this._historial.unshift(query );
      this._historial = this._historial.splice(0,10); //corta entre el elemento 0 y el elemento 10 de la lista
    }
      
    

    console.log(this._historial);
  }


}
