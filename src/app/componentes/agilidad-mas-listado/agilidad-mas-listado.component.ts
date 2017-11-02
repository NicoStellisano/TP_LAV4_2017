import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
    let storage=JSON.parse(window.localStorage.getItem("ganadoresAgilidad"));
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
    
    window.localStorage.setItem("ganadoresAgilidad",JSON.stringify(this.listadoParaCompartir));
   // console.info("en app",this.listadoParaCompartir);
  }
}
