import { Component } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent {
  Montant! : number;
  MontantConvert! : number;
    constructor() { }
  
    recap(e : any){
      this.MontantConvert = e;
    }
    ngOnInit(): void {
    
    }

}
