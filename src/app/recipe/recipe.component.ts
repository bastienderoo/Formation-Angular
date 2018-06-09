import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  expanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
