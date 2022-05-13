import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bhg.com.au%2Fmedia%2F8210%2Fam-schnitzel-09.jpg&f=1&nofb=1',
      ingredients: ['French Fries', 'Pork', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Pizza',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F684xflex%2Fpublic%2Fimages%2F2016%2F02%2F020816-pizza-margherita-lead.jpg%3Fitok%3D4i_vQ9lr&f=1&nofb=1',
      ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Basil'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
