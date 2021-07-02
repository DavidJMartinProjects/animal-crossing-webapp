import { Player } from './../_models/Player';
import { RestClient } from './../_service/RestClient.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/Game';
import { ItemLocation } from '../_models/ItemLocation';
import { FormBuilder, FormGroup }from '@angular/forms'
import { empty } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  newGnomes: any;

  formValue!: FormGroup;
  game: Game = new Game();

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private restClient: RestClient) { 
    //get request from web api
    // this.httpClient.get('http://127.0.0.1:8080/games/').subscribe(data => {

    //   this.data = data;
    //   console.log("data: " + data);
    //   setTimeout(() => {
    //   }, 1);
    // }, error => console.error(error));
    this.getAllGames();
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      startDate : [''],
      startTime : [''],
      description : [''],
      active : [''],
      imageUrl : ['']
    })
  }

  postGame() {    
    this.game.id = 0;
    this.game.startDate = this.formValue.value.startDate;    
    this.game.description = this.formValue.value.description;
    this.game.startTime = this.formValue.value.startTime;
    this.game.players = new Array<Player>();
    this.game.active = false;
    
    this.restClient.postGame(this.game).subscribe(res=> {            
      let ref = document.getElementById('closeBtn');
      ref?.click();
      this.formValue.reset();
      this.getAllGames();
    },
    err => {
      console.log('encountered error during post request.');
    })
  }

  getAllGames() {
    this.restClient.getAllGames().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteGameById(id: number) {
    this.restClient.deleteGameById(id).subscribe((response: any) => {
      console.log("deleted game with id: {}", id);
      this.getAllGames();
    })
  }

}





