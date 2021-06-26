import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../model/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiServerUrl = environment.bankendApiUrl;
  private gamesPath = environment.gamesPath;

  constructor(private httpClient: HttpClient) {}

  public getGames(): Observable<Game[]> {
    console.log("calling: " + `${this.apiServerUrl + this.gamesPath}`);
    return this.httpClient.get<Game[]>(`${this.apiServerUrl + this.gamesPath}`);
  }

}
