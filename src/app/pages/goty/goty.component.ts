import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
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

  voteGame(id: string) {

    this.gameService.voteGame(id).subscribe(rep => {

      console.log(rep);

      Swal.fire({
        title: rep.ok ? 'Realizado' : 'No realizado',
        text: rep.msg,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#dc3545'
      })

    });

  }

}
