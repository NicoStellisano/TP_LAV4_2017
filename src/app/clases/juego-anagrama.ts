import { Juego } from '../clases/juego'
/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
export class JuegoAnagrama extends  Juego {
    palabraOrdenada: string = "";
    palabraDesordenada:string = "";
    palabraIngresada:string="";
    constructor(jugador?:string,nombre?: string, gano?: boolean, ) {
        super(jugador,gano,"Descifra el Anagrama");
     
    
      
      }
    public verificar() {
        if (this.palabraIngresada == this.palabraOrdenada) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public generarnumero() {
        let palabra:number= Math.floor((Math.random() * 5) + 1);
        switch(palabra)
        {
            case 1:
            this.palabraOrdenada="PERRO";
            break;
            case 2:
            this.palabraOrdenada="PAPEL";
            break;
            case 3:
            this.palabraOrdenada="CELULAR";
            break;
            case 4:
            this.palabraOrdenada="CRUZ";
            break;
            case 5:
            this.palabraOrdenada="SILLA";
            break;
        }

        let arrayLetras:Array<string>=new Array<string>();
        for (var k = 0; k < this.palabraOrdenada.length; k++) {
            var element = this.palabraOrdenada[k];
            arrayLetras[k]=element;
            
        }
        var currentIndex = arrayLetras.length, temporaryValue, randomIndex;
        
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = arrayLetras[currentIndex];
            arrayLetras[currentIndex] = arrayLetras[randomIndex];
            arrayLetras[randomIndex] = temporaryValue;
           
        }
        console.log(arrayLetras);
        for (var j = 0; j < arrayLetras.length; j++) {
            var element = arrayLetras[j];
            this.palabraDesordenada+=element;
            
        }
        
        this.gano = false;
      
    }
    
}
