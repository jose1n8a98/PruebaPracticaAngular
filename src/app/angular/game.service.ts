import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Game } from './types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'api/games';
  games:Game[] | any =[]
  
  constructor(private http: HttpClient) {}

  async getGames(){
    if(this.games.length == 0)
    {
      const gameGet = await this.http.get(this.gamesUrl).toPromise()
      this.games = gameGet
      return gameGet
    }
    return this.games
  }

  async getGameById(gameId: string | number){
    await this.getGames()
    return this.games.find((game:Game)=> gameId == game.id)
  }

  async createGame(game: Game) {
    await this.getGames()
    this.games.push(game)
  }

  updateGame(game: Game) {
    this.games =  this.games.map((item: Game)=> {if(game.id == item.id){return game}else return item})
  }

  deleteGame(gameId: string | number) {
    this.games = this.games.filter((game:Game)=> gameId != game.id)
  }

}
