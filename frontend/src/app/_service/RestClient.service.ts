import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Game } from '../_models/Game';

@Injectable({
    providedIn: "root"
})
export class RestClient {

    constructor(private httpClient: HttpClient) { }

    postGame(data: Game) {
        console.log('posting game: {}', data);
        return this.httpClient.post<Game>('http://127.0.0.1:8080/games/', data, { responseType: "json" })
            .pipe(map((res: any) => {
                return res;
            }))
    }

    getAllGames() {
        console.log('getting all games.');
        return this.httpClient.get<Game[]>('http://127.0.0.1:8080/games/', { responseType: "json" })
            .pipe(map((res: any) => {
                return res;
            }))
    }

    deleteGameById(id: number) {
        return this.httpClient.delete<Game[]>('http://127.0.0.1:8080/games/' + id, { responseType: "json" })
            .pipe(map((res: any) => {
                return res;
            }))

    }
}