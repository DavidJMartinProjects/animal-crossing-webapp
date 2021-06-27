import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  data: any;
  currentGame = {} as Game;

  games!: Game[];
  // currentGame!: Game;
  userForm!: boolean;
  isNewUser!: boolean;
  newUser: any = {};
  editUserForm!: boolean;
  editedUser: any = {};

  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('http://127.0.0.1:8080/games/').subscribe(data => {

      this.data = data;
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }

  showEditUserForm(game: Game) {
    console.log("edit game: " + game.description);
    this.currentGame = game;
    console.log("currentGame set.");
    $('#exampleModal').modal('show');
    $('#startDateInput').val(game.startDate);
    $('#startTimeInput').val(game.startTimes[0].startTime);
    $('#descriptionInput').val(game.description);

    if (!game) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = game;
  }

  removeUser(game: Game) {
    // this.userService.deleteUser(user);
    console.log("delete game: " + game.description);
  }

  showNewGnomeCrossingForm() {
    console.log("new gnome crossing.")
  }

  addGnome(game: Game) {
    console.log("new gnome crossing.")
    var value = $('#group input:radio .selected').val();
    console.log("adding:" + value);
    console.log($('input[name=gname]:checked').val());

    $('body').removeClass('modal-open'); // For scroll run
    // $('#newGameModal').modal('hide');
    // $('#newGameModal').modal('hide');    
    // $('#newGnomeModal').modal('show');  

    // save a game
  }


  


}


