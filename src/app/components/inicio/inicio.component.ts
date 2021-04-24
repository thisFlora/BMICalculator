import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad:number = 25;
  peso:number = 60;
  altura:number = 170;
  sexo:string = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  menosPeso():void{
    this.peso -= 1;
  }
  masPeso():void{
    this.peso +=1;
  }
  menosEdad():void{
    this.edad -=1;
  }
  masEdad():void{
    this.edad +=1;
  }
  
  cambiarAltura(event: any){
    this.altura = event.target.value;
  }

  masculino():void{
    this.sexo = 'Masculino';
  }
  femenino():void{
    this.sexo= 'Femenino';
  }

  calcularBMI(){
    //Vamos a hacer calculos
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)])

  }
}
