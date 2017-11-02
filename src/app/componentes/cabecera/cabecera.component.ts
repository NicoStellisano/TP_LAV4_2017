import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
user:boolean;
usuario:string;
  constructor() {
    this.user=false;
 
    let prueba=JSON.parse(localStorage.getItem("usuario"));
    if(prueba!=null)
    {
      this.usuario=prueba.email;
      this.user=true;
    }
   }

  ngOnInit() {
  }

}
