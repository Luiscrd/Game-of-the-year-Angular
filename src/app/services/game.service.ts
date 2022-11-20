import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { RespGames, Game } from '../interfaces/interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games: Game[] = [];

  constructor(

    private http: HttpClient

  ) { }

  getNominated() {

    if(this.games.length !== 0) return of({ ok: true, games: this.games });

    return this.http.get<RespGames>(`${base_url}/goty`);

  }

  voteGame(id: string) {

    return this.http.post<{ok: boolean, msg: string}>(`${base_url}/goty/${id}`, {});

  }

}
