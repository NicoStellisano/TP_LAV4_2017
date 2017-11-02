import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
email:string;
pass:string;
pass2:string;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  registrarse()
  {
    if(this.email!=null && this.email!=undefined && this.pass!=null && this.pass!=undefined && this.pass2!=null && this.pass2!=undefined)
    {
      if(this.pass==this.pass2)
      {
        localStorage.setItem("usuario",'{"email":"'+this.email+'","pass":"'+this.pass+'"}');
        this.router.navigate(['/Principal']);
        

      }else{
        alert("Las contraseñas no coinciden");
      }
    }else{
      alert("Complete todos los campos");
    }
  }

}
