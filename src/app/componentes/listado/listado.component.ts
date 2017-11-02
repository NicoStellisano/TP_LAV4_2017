import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService
  constructor(servicioJuego:JuegoServiceService) { 
    this.listadoParaCompartir=new Array<any>();
    this.miServicioJuego = servicioJuego;}
  
  ngOnInit() {
    let storage=JSON.parse(window.localStorage.getItem("ganadoresAdivina")); 
    if(storage!=null)
    {

    
    for (var i = 0; i < storage.length; i++) {
      var element = storage[i];
      this.listadoParaCompartir.push(element);
      
    }
  }
     storage=JSON.parse(window.localStorage.getItem("ganadoresAgilidad")); 
    if(storage!=null)
    {

    
    for (var i = 0; i < storage.length; i++) {
      var element = storage[i];
      this.listadoParaCompartir.push(element);
      
    }
    }
    storage=JSON.parse(window.localStorage.getItem("ganadoresPPT")); 
    if(storage!=null)
    {

    
    for (var i = 0; i < storage.length; i++) {
      var element = storage[i];
      this.listadoParaCompartir.push(element);
      
    }
    }
    storage=JSON.parse(window.localStorage.getItem("ganadoresAnagrama")); 
    if(storage!=null)
    {

    
    for (var i = 0; i < storage.length; i++) {
      var element = storage[i];
      this.listadoParaCompartir.push(element);
      
    }
    }

 

  }
}