import { Player } from './../_models/Player';
import { RestClient } from './../_service/RestClient.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/Game';
import { ItemLocation } from '../_models/ItemLocation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


import { of } from 'rxjs';
import * as $ from 'jquery';
import * as uuid from 'uuid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any; 
  // newGnomes: any;
  newGnomes: ItemLocation[] = new Array();
  game: Game = new Game();
  observableGnomes = of(this.newGnomes);

  formValue!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private restClient: RestClient) {
    this.getAllGames();    
    this.newGnomes = new Array<ItemLocation>();
    const theId = uuid.v4();
    this.newGnomes.push(new ItemLocation(theId, "laidbackGnomeGreen", "laidbackGnomeGreen"));    
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({ 
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      description: ['', Validators.required],
      active: ['',],
      imageUrl: ['', ]
    })
  }

  postGame() {


  //   <div *ngIf="submitted && f.fullname.errors" class="invalid-feedback">
  //   <div *ngIf="f.fullname.errors.required">Fullname is required</div>
  // </div>

    this.game.id = 0;
    this.game.startDate = this.formValue.value.startDate;
    this.game.description = this.formValue.value.description;
    this.game.startTime = this.formValue.value.startTime;
    this.game.players = new Array<Player>();
    this.game.active = false;
    this.game.itemLocations = this.newGnomes;

    this.restClient.postGame(this.game).subscribe(res => {
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
      this.getAllGames();
    })
  }

  addGnome() {
    let description = $('input[name=gname]:checked').val();
    let imageUrl = $('input[name=gname]:checked').val();

    const checkboxes = document.querySelectorAll('input[name="gname"]:checked');
      this.observableGnomes.subscribe((response: any) => {
        const theId = uuid.v4();
        this.newGnomes.push(new ItemLocation(theId, imageUrl, description));
        this.getAllGnomes();
      })
    
  }

  getAllGnomes() {
    this.observableGnomes.subscribe((response: any) => {      
      this.observableGnomes = of(response);
    })
  }

  deleteGnome(theId: string) {
    this.observableGnomes.subscribe((response: any) => {      
      this.newGnomes = this.newGnomes.filter( gnome => gnome.uuid !== theId); // delete row      
    })
  }

}





