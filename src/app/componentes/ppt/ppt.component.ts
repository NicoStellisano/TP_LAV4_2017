import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PPTComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  
    nuevoJuego: JuegoPiedraPapelTijera;
    Mensajes:string;
    resultado:number;
    ocultarVerificar:boolean;
    usuario:string="natalia natalia";
   
    constructor() { 
      let prueba=JSON.parse(localStorage.getItem("usuario"));
      if(prueba!=null)
      {
        this.usuario=prueba.email;
        
      }
      this.nuevoJuego = new JuegoPiedraPapelTijera(this.usuario);
      this.nuevoJuego.generarnumero();
    }
    generarnumero() {
      this.nuevoJuego.generarnumero();
    }
    verificar(numero:number)
    {
     var element= <HTMLInputElement> document.getElementById("btn1");
     element.disabled=true;
     
      element= <HTMLInputElement> document.getElementById("btn2");
     element.disabled=true;
      element= <HTMLInputElement> document.getElementById("btn3");
     element.disabled=true;
      this.nuevoJuego.numeroIngresado=numero;
      if (this.nuevoJuego.verificar()){
        
        this.enviarJuego.emit(this.nuevoJuego);
        if(this.nuevoJuego.numeroSecreto==1)
        {
          this.MostarMensaje("¡PIEDRA!",true);
          
        }else if(this.nuevoJuego.numeroSecreto==2)
        {
          this.MostarMensaje("¡PAPEL!",true);
          
        }else if(this.nuevoJuego.numeroSecreto==3)
        {
          this.MostarMensaje("¡TIJERAS!",true);          
        }
        this.nuevoJuego.numeroSecreto=0;
  
      }else{
  
        let mensaje:string;
        if(this.nuevoJuego.numeroSecreto==1)
        {
          this.MostarMensaje("Piedra",false);
          
        }else if(this.nuevoJuego.numeroSecreto==2)
        {
          this.MostarMensaje("Papel",false);
          
        }else if(this.nuevoJuego.numeroSecreto==3)
        {
          this.MostarMensaje("Tijera",false);          
        }
       
  
      }
      this.nuevoJuego = new JuegoPiedraPapelTijera(this.usuario);
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
        modelo.ocultarVerificar=false;
        var element= <HTMLInputElement> document.getElementById("btn1");
        element.disabled=false;
         element= <HTMLInputElement> document.getElementById("btn2");
        element.disabled=false;
         element= <HTMLInputElement> document.getElementById("btn3");
        element.disabled=false;
       }, 3000);

      console.info("objeto",x);
    
     }  
    ngOnInit() {
    }
  
  }
  