import { Article } from './../Model/Article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  EmploiList: Article[] = [];
  constructor(){}

  ngOnInit(): void {
    this.EmploiList=[{reference:"aaa",titre:"bbb",entreprise:"ccc",etat:true},{reference:"aaa",titre:"bbb",entreprise:"ccc",etat:false}];
  }
  sum : number =0;
  entrepriseRecherchee:string ="";

  calculer():void{
    this.sum =0;
    for (let Article of this.EmploiList){
      if( Article.etat == true)
      this.sum++;
  }

}

}
