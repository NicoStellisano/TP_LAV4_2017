import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  
    nuevoJuego: JuegoAnagrama;
    Mensajes:string;
    palabraIngresada:string;
    usuario:string="natalia natalia";
   
    constructor() { 
      let prueba=JSON.parse(localStorage.getItem("usuario"));
      if(prueba!=null)
      {
        this.usuario=prueba.email;
        
      }
      this.nuevoJuego = new JuegoAnagrama(this.usuario);
      this.nuevoJuego.generarnumero();
    }
    generarnumero() {
      this.nuevoJuego.generarnumero();
    }
    verificar()
    {
      console.log(this.palabraIngresada);
      this.palabraIngresada=this.palabraIngresada.toUpperCase();
      console.log(this.palabraIngresada);
      
     this.nuevoJuego.palabraIngresada=this.palabraIngresada;
      if (this.nuevoJuego.verificar()){
        
        this.enviarJuego.emit(this.nuevoJuego);
        this.MostarMensaje("¡Correcto! la palabra era: " + this.nuevoJuego.palabraOrdenada,true);
        
        
      }else{
       
          this.MostarMensaje("¡Incorrecto! la palabra era: " + this.nuevoJuego.palabraOrdenada,false);
      
  
      }
      this.palabraIngresada="";
      this.nuevoJuego = new JuegoAnagrama(this.usuario);
      this.generarnumero();
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
    mayusculas()
    {
    }
  
  }
  