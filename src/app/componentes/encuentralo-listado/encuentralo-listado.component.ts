import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentralo-listado',
  templateUrl: './encuentralo-listado.component.html',
  styleUrls: ['./encuentralo-listado.component.css']
})
export class EncuentraloListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}


  ngOnInit() {
    let storage=JSON.parse(window.localStorage.getItem("ganadoresEncuentralo"));
    if(storage!=null)
    {
    for (var i = 0; i < storage.length; i++) {
      var element = storage[i];
      this.listadoParaCompartir.push(element);
      
    }
  }
  }
   tomarJuegoTerminado(juego: any)
  {
    this.listadoParaCompartir.push(juego);
    
    window.localStorage.setItem("ganadoresEncuentralo",JSON.stringify(this.listadoParaCompartir));
   // console.info("en app",this.listadoParaCompartir);
  }
}