import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from '../model/Game';
import { GameService } from '../services/game.service';

type NewType = any;

@Component({
  selector: 'app-game-admin-datatable',
  templateUrl: './game-admin-datatable.component.html',
  styleUrls: ['./game-admin-datatable.component.scss']
})
export class GameAdminDatatableComponent implements OnInit, AfterViewInit {
  
  public games!: Game[];

  dtOptions: DataTables.Settings = {};

  constructor(private gameService: GameService) {
    this.getGames();
  }

  ngOnInit() {    
    $('.datetable').DataTable();
  }

  ngAfterViewInit(): void {
    $('.datetable').DataTable();
  }

  public getGames(): void {
    this.gameService.getGames().subscribe(
      (response: Game[]) => {
        this.games = response;
        return this.games
        console.log(this.games);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )

    this.dtOptions = {
      data: this.games,
      searching: true, // Search Box will Be Disabled
      ordering: true, // Ordering (Sorting on Each Column)will Be Disabled
      info: true, // Will show "1 to n of n entries" Text at bottom
      lengthChange: false, // Will Disabled Record number per page
      paging: true,
      columnDefs: [{
        targets: 3,
        orderable: true
      }]
    };
  }

}

