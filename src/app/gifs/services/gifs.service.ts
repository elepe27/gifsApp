import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //esto significa que el servicios se encuentra de manera global para toda la app
})
export class GifsService {

  private apiKey: string = 'mRYm3gtzMFFRDetWz3hiIsN225AF1DAB'; // api key de giphy
  private _historial : string []=[];

  get historial(){
    // this._historial = this._historial.splice(0,10);
    return [...this._historial]; //Rompe la referencia con el arreglo, por si se hace una modificación no afecte el arreglo
  }
  constructor(private http:HttpClient){ // se inyecta el servicio de httpclient

  }

  buscarGifs(query: string=''){
    query = query.trim().toLowerCase(); //pasa toda la query a minuscula

     //inserta un nuevo elemento al comienzo de un arreglo o lista
    
    if (!this._historial.includes(query)) { // si no incluye el elemento, entonces lo va a insertar '!'
      this._historial.unshift(query );
      this._historial = this._historial.splice(0,10); //corta entre el elemento 0 y el elemento 10 de la lista
    }
    //modulo de angular, que retorna observables, se puede realizar muchas manipulaciones
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=mRYm3gtzMFFRDetWz3hiIsN225AF1DAB&q=Dragon ball z&limit=10')
        .subscribe((resp:any) =>{ // al no saber typescript que formato es el que entrega, se coloca any para evitar errores
          console.log(resp.data);
        })
    
  }


}
