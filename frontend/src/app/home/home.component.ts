import { Player } from './../_models/Player';
import { RestClient } from './../_service/RestClient.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/Game';
import { ItemLocation } from '../_models/ItemLocation';
import { FormBuilder, FormGroup } from '@angular/forms'
// import { empty } from 'rxjs';
// import {of} from 'rxjs/Observable/of';

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
    console.log("created: " + this.newGnomes.length + 1)
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      startDate: [''],
      startTime: [''],
      description: [''],
      active: [''],
      imageUrl: ['']
    })
  }

  postGame() {
    this.game.id = 0;
    this.game.startDate = this.formValue.value.startDate;
    this.game.description = this.formValue.value.description;
    this.game.startTime = this.formValue.value.startTime;
    this.game.players = new Array<Player>();
    this.game.active = false;

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
      console.log("deleted game with id: {}", id);
      this.getAllGames();
    })
  }

  addGnome() {
    // this.newGnomes.push(gnome);

    // let ref = document.getElementById('closeBtn');

    let description = $('input[name=gname]:checked').val();
    let imageUrl = $('input[name=gname]:checked').val();
    console.log($('input[name=gname]:checked').val());
    console.log(document.getElementById('#form-check')?.valueOf());

    const checkboxes = document.querySelectorAll('input[name="gname"]:checked');
    console.log(checkboxes);
    console.log(document.querySelectorAll('input[name="gname"]:checked').valueOf());
    
      // this.data = response
      
      
      this.observableGnomes.subscribe((response: any) => {
        // this.data = response
        // this.newGnomes = [ ...this.newGnomes, new ItemLocation(imageUrl, description) ]; // insert row
        const theId = uuid.v4();
        this.newGnomes.push(new ItemLocation(theId, imageUrl, description));
        console.log("change");
        this.getAllGnomes();
      })
    
  }

  getAllGnomes() {
    this.observableGnomes.subscribe((response: any) => {      
      this.observableGnomes = of(response);
      console.log("change")
    })
  }

  deleteGnome(theId: string) {
    this.observableGnomes.subscribe((response: any) => {
      // this.data = response
      this.newGnomes = this.newGnomes.filter( gnome => gnome.uuid !== theId); // delete row
      console.log("change with id: {}", theId)
    })
  }

}





