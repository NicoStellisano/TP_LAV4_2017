import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { JuegoEncuentralo } from '../../clases/juego-encuentralo';

@Component({
  selector: 'app-encuentralo',
  templateUrl: './encuentralo.component.html',
  styleUrls: ['./encuentralo.component.css']
})
export class EncuentraloComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  
    nuevoJuego: JuegoEncuentralo;
    Mensajes:string;
    numeros:Array<number>;
    usuario:string="natalia natalia";
   
    constructor() { 
      let prueba=JSON.parse(localStorage.getItem("usuario"));
      if(prueba!=null)
      {
        this.usuario=prueba.email;
        
      }
      this.numeros=new Array<number>();
      this.nuevoJuego = new JuegoEncuentralo(this.usuario,"Encuentralo");
      this.nuevoJuego.generarnumero();
      for (var i = 0; i < 1197; i++) {
        this.numeros[i]=this.nuevoJuego.numeroCopia;
        
      }
      let nume = Math.floor((Math.random() * 1197) + 1);
      this.numeros[nume]=this.nuevoJuego.numeroSecreto;
      
    }
    generarnumero() {
      this.nuevoJuego.generarnumero();
    }
    verificar(num:number)
    {
      
     this.nuevoJuego.numeroIngresado=num;
      if (this.nuevoJuego.verificar()){
        
        this.enviarJuego.emit(this.nuevoJuego);
        this.MostarMensaje("¡Correcto! encontraste el número",true);
        
        
      }else{
       
          this.MostarMensaje("¡Incorrecto! no encontraste el número",false);
      
  
      }
      this.nuevoJuego = new JuegoEncuentralo(this.usuario);
      this.generarnumero();
      for (var i = 0; i < 1197; i++) {
        this.numeros[i]=this.nuevoJuego.numeroCopia;
        
      }
      let nume = Math.floor((Math.random() * 1197) + 1);
      this.numeros[nume]=this.nuevoJuego.numeroSecreto;
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

    
     }  
    ngOnInit() {
    }
    
  
  }
  