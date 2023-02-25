import { Articletp2 } from './../Model/articletp2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(){}
   titre: string = "Les articles du jour";
  listArctile2:Articletp2[] =[];


  ngOnInit(): void {
    this.listArctile2=[{titre:"Le championnat du monde",contenu:"Le champion du monde de cette année est",auteur:'Med Taher' ,date:'12/12/2008', categorie:'Sport'},
     {titre:'Lesnouveaux',contenu:'Les nouveaux parents', auteur:'Abmed' ,date:"1/11/2018", categorie:' Education'},
     { titre :'Comment écrire votre CV',contenu:'Pour réussir i décraucher un emplol' ,auteur: 'Marie Elsa', date:'02/04/2017',categorie:"Travail"} ]
  }

}
