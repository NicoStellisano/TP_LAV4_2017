import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-ppt-listado',
  templateUrl: './ppt-listado.component.html',
  styleUrls: ['./ppt-listado.component.css']
})
export class PPTListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}


  ngOnInit() {
    let storage=JSON.parse(window.localStorage.getItem("ganadoresPPT"));
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
    
    window.localStorage.setItem("ganadoresPPT",JSON.stringify(this.listadoParaCompartir));
   // console.info("en app",this.listadoParaCompartir);
  }
}