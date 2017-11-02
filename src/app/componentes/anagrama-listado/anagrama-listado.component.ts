import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-anagrama-listado',
  templateUrl: './anagrama-listado.component.html',
  styleUrls: ['./anagrama-listado.component.css']
})
export class AnagramaListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}


  ngOnInit() {
    let storage=JSON.parse(window.localStorage.getItem("ganadoresAnagrama"));
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
    
    window.localStorage.setItem("ganadoresAnagrama",JSON.stringify(this.listadoParaCompartir));
   // console.info("en app",this.listadoParaCompartir);
  }
}