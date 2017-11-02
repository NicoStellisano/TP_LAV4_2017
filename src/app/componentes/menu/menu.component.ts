import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario:string;
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      let prueba=JSON.parse(localStorage.getItem("usuario"));
      if(prueba!=null)
      {
        this.usuario=prueba.email;
      }
    }

  ngOnInit() {
  }
  salir()
  {
    localStorage.removeItem("usuario");
    this.router.navigate(['/Login']);
    
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
        case 'PPT':
        this.router.navigate(['/Juegos/PPTListado']);
        break;
        case 'Anagrama':
        this.router.navigate(['/Juegos/AnagramaListado']);
        break;
        case 'Encuentralo':
        this.router.navigate(['/Juegos/EncuentraloListado']);
        break;
    }
  }

}
