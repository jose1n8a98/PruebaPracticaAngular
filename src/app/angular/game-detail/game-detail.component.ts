import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  games?: Game[] | any;  gameId: string | number = 0
  game: Game | any= {description:"", id:0, name:""} 
  constructor(private router:Router, private aRoute:ActivatedRoute, private gameService: GameService ) 
  { 
    this.gameId = aRoute.snapshot.paramMap.get('id') || 0
  }

  async ngOnInit(){
    this.game = await this.gameService.getGameById(this.gameId)
    console.log(this.game)
  }
  Actualizar()
  { 
    this.gameService.updateGame(this.game)
    this.router.navigate(["gameList"])
  }
}
