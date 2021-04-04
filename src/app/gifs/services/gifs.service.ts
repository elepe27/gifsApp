import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //esto significa que el servicios se encuentra de manera global para toda la app
})
export class GifsService {

  private apiKey: string = 'mRYm3gtzMFFRDetWz3hiIsN225AF1DAB'; // api key de giphy
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'; // centralizamos el url
  private _historial : string []=[];

  // Cambiamos el tipo a GIF de la interface
  public resultados : Gif[]= [];

  get historial(){
    // this._historial = this._historial.splice(0,10);
    return [...this._historial]; //Rompe la referencia con el arreglo, por si se hace una modificación no afecte el arreglo
  }
  


  constructor(private http:HttpClient){ // se inyecta el servicio de httpclient
    // this._historial = localStorage.getItem('historial');
    // el arreglo de historial se carga en el constructor porque es una sola ejecución que se realiza
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      this.resultados = JSON.parse(localStorage.getItem('resultados'));
      //el contrario del stirngify es el parse, y que solo se puede transformar a un objeto
    }
    
  }

  buscarGifs(query: string=''){
    query = query.trim().toLowerCase(); //pasa toda la query a minuscula

     //inserta un nuevo elemento al comienzo de un arreglo o lista
    
    if (!this._historial.includes(query)) { // si no incluye el elemento, entonces lo va a insertar '!'
      this._historial.unshift(query );
      this._historial = this._historial.splice(0,10); //corta entre el elemento 0 y el elemento 10 de la lista
      
      localStorage.setItem('historial',JSON.stringify(this._historial)); // para poder guardar un arreglo de string
      // en el localstorage se usa JSON.stringify y este convierte todo a un string
    }
    //modulo de angular, que retorna observables, se puede realizar muchas manipulaciones
    //se le agrega el tipo SearchGifsResponse

    const params = new HttpParams() // por cada parametro se le establece lineas de .set
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',query);

    

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params}) // los parametros van entre llaves {}
        .subscribe((resp) =>{ // al no saber typescript que formato es el que entrega, se coloca any para evitar errores
          
          this.resultados = resp.data;// se le anida los datos a resultados desde resp.data
          localStorage.setItem('resultados',JSON.stringify(resp.data));
        })
    
  }


}
