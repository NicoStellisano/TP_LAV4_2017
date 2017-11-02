import { Juego } from '../clases/juego'

export class JuegoAgilidad extends  Juego {
    numero1:number=0;
    numero2:number = 0;
    operador:string="";
    resultado:number=0;
    constructor(jugador?:string,nombre?: string, gano?: boolean) {
        super(jugador,gano,"Agilidad Aritmética");
     
    
      
      }
    public verificar():boolean {
      switch(this.operador)
      {
          case "+":
          if(this.numero1+this.numero2==this.resultado)
          {
              this.gano=true;
              return true;
          }
          break;
          case "-":
          if(this.numero1-this.numero2==this.resultado)
          {
              this.gano=true;
              return true;
          }
          break;
          case "*":
          if(this.numero1*this.numero2==this.resultado)
          {
              this.gano=true;
              return true;
          }
          break;
          case "/":
          if(this.numero1/this.numero2==this.resultado)
          {
              this.gano=true;
              return true;
          }
          break;
      }
      this.gano=false;
      return false;
     }
     public generarnumero() {
        this.numero1 = Math.floor((Math.random() * 10) + 1);
        this.numero2 = Math.floor((Math.random() * 10) + 1);
        let rndOperador = Math.floor((Math.random() * 4) + 1);
        switch(rndOperador)
        {
            case 1:
            this.operador="+";
            break;
            case 2:
            this.operador="-";
            break;
            case 3:
            this.operador="*";
            break;
            case 4:
            this.operador="/";
            break;
            default:
            this.operador="+";
            break;
        }
        this.gano = false;
      }
      
}

