import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {
  gameNewData:Game = {id:0, description:"", name:""}
  
  constructor(private service:GameService, private router:Router) { }

  ngOnInit(): void {

  }
  async newGame()
  {
   await this.service.createGame(this.gameNewData)
    this.router.navigate(['gameList'])
  }
}
