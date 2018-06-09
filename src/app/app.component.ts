import {Component} from '@angular/core';
import {RECIPES} from '../assets/mock/recipes.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  recipes = RECIPES;
}
