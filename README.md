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

