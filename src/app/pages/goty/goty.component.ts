import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public games: Game[] = [];

  constructor(

    private gameService: GameService

  ) { }

  ngOnInit(): void {

    this.gameService.getNominated().subscribe(resp => {

      if (!resp.ok) return;

      this.games = resp.games;

      this.gameService.games = resp.games;

    })

  }

}
