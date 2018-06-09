import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from './model/recipe.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class RecipeService {
  URL_env = environment.URL;
  URL = this.URL_env + '/api/v1/recipes';

  constructor(private http: HttpClient) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.URL);
  }
}
