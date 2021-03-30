# GifsApps

Aplicación del curso de Fernando Herrera

## Diseño 29/03/2021
Se aplican diseños de bootstrap

## Modulo Shared 29/03/2021
Se crea el modulo shared el cual se debe exportar en el `app.module.ts`, y se debe crear el componente `sidebar` el cual se crea en la misma ruta donde esta el modulo nuevo, y este automaticamente se importara en el modulo nuevo, para que se pueda ver en el modulo padre, se debe declarar en el `export:[]` y así podemos llamarlo del `app.component.html`

## GifsModule y componentes 29/03/2021
Se crea los componentes busqueda y resultado, y se exportan de manera automatica, adicionalmente antes se crea el modulo gifs el cual no se necesita exportar nada afuera del componente

## @ViewChild obtener referencias a objetos del html 29/03/2021
El viewChild cumple la función de retornar los elementos de un html, el cual se puede rescatar mediante su `tag` o tambien dependiendo de la clase `<input>` en el ejercicio se rescata con `#txtBusqueda` y se le asigna un valor en el archivo `TypeScript` 

![ViewChild](https://i.ibb.co/T8yrXS4/viewchild.png)

El tipo es ElementRef, y para las versiones màs nuevas de angular se utiliza el operador `!` para no tener problemas de que pueda o `no` existir el elemento que nos indica `TypeScript`.

## Gifs services 30/03/2021
Primero se debe crear el servicio `ng g s gifs/services/gifs --skipTests` esto creara el servicio sin el archivo de pruebas, luego debemos crear nuestra lista de historial en el servicio `private _historial : string []=[];` y hacemos su get correspondiente, creamos nuestra función `buscarGifs()` en donde se agregara a la lista la busqueda con un `unshift` la cual agrega el ultimo elemento al principio del arreglo, luego se llama del componente realizando una inyección del servicio realizando el get del historial.

Archivo Service

![gifService](https://i.ibb.co/4Wq3vkV/gfs-Service.png)

Componente

![Component](https://i.ibb.co/hDnJXzk/gifservice-2.png)

## Controlar el historial de busqueda 30/03/2021
Validamos los datos en primer lugar, en la busqueda para que no tenga valores vacios (ref 1), luego en el servicio, verificamos si el dato esta ingresado ya o no, con la validación del `includes`, en el caso del ejemplo sería `!` la negación de esto y se agrega (ref 2) y también se realiza un `splice` para que solo muestre los datos desde el 0 al 10.

![Ref1](https://i.ibb.co/PDhb3Ks/control1.png)

![Ref2](https://i.ibb.co/8jmqXsP/control2.png)

## Giphy Api Key - Giphy Developer 30/03/2021
Para poder utilizar el `httpClientModule` se debe importar en el modulo que queremos utilizarlo, y luego inyectarlo en el `constructor` de nuestro `servicio`, para poder utilizar el http get y todas las opciones que nos brindara.

![httpClientModule](https://i.ibb.co/V9KgCkY/httpclientget.png)