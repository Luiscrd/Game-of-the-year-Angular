import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespGames } from '../interfaces/interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(

    private http: HttpClient

  ) { }

  getNominated() {

    return this.http.get<RespGames>(`${base_url}/goty`);

  }

}
