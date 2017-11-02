import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  resultado:number;
  Mensajes:string;
  usuario:string="natalia natalia";
  
  private subscription: Subscription;
  ngOnInit() {
    this.ocultarVerificar=true;
    
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     let prueba=JSON.parse(localStorage.getItem("usuario"));
     if(prueba!=null)
     {
       this.usuario=prueba.email;
       
     }
    this.nuevoJuego = new JuegoAgilidad(this.usuario);
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.nuevoJuego.generarnumero();
    console.log(this.nuevoJuego);
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        this.MostarMensaje("Se acabó el tiempo!!",false);
        clearInterval(this.repetidor);
        this.ocultarVerificar=true;
        this.Tiempo=7;
      }
      }, 900);

  }
  verificar()
  {
    clearInterval(this.repetidor);
    this.ocultarVerificar=true;
    this.Tiempo=7;
    this.nuevoJuego.resultado=this.resultado;
    if(this.nuevoJuego.verificar())
    {
      this.enviarJuego.emit(this.nuevoJuego);      
      this.MostarMensaje("Sos un Genio!!!",true);
      
    }else{
      this.MostarMensaje("Te equivocaste!!",false);
    }
    this.resultado=0;
    
   this.nuevoJuego = new JuegoAgilidad(this.usuario);

   
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
      var modelo=this;
      setTimeout(function(){ 
        x.className = x.className.replace("show", "");
       }, 3000);
      console.info("objeto",x);
    }

}
