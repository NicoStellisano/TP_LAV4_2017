import { Juego } from '../clases/juego'
/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
export class JuegoPiedraPapelTijera extends  Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor( jugador?:string,nombre?: string, gano?: boolean,) {
        super(jugador,gano,"Piedra Papel y Tijeras");
     
    
      
      }
    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 3) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
      }
     
       
}
