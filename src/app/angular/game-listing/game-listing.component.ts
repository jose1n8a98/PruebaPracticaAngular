import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements AfterViewInit {

  games?: Game[] | any;
  constructor(private service: GameService) {}

  async ngAfterViewInit() {
   
      this.games = await  this.service.getGames() 
  }

  DeleteGame(gameId: string | number)
  {
    this.service.deleteGame(gameId)
    this.ngAfterViewInit()
  }
}
