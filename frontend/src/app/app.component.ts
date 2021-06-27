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
    // $('#exampleInputEmail1').val(game.startDate);
    $('#startDateInput').val(game.startDate);
    $('#startTimeInput').val(game.startTimes[0].startTime);
    $('#descriptionInput').val(game.description);
    // $('#exampleInputEmail1').val(game.description);
    // $('#exampleInputEmail1').val(game.description);
    
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


}

$(document).on('click', '.panel-heading span.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.closest('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  } else {
    $this.closest('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }
});
$(document).on('click', '.panel div.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.closest('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  } else {
    $this.closest('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }
});
$(document).ready(function() {
  $('.panel-heading span.clickable').click();
  $('.panel div.clickable').click();
});


// users: User[];
// userForm: boolean;
// isNewUser: boolean;
// newUser: any = {};
// editUserForm: boolean;
// editedUser: any = {};

// constructor(private userService: UserService) { }

// ngOnInit() {
//   this.users = this.getUsers();
// }

// getUsers(): User[] {
//   return this.userService.getUsersFromData();
// }

// showEditUserForm(user: User) {
//   if (!user) {
//     this.userForm = false;
//     return;
//   }
//   this.editUserForm = true;
//   this.editedUser = user;
// }

// showAddUserForm() {
//   // resets form if edited user
//   if (this.users.length) {
//     this.newUser = {};
//   }
//   this.userForm = true;
//   this.isNewUser = true;

// }

// saveUser(user: User) {
//   if (this.isNewUser) {
//     // add a new user
//     this.userService.addUser(user);
//   }
//   this.userForm = false;
// }

// updateUser() {
//   this.userService.updateUser(this.editedUser);
//   this.editUserForm = false;
//   this.editedUser = {};
// }

// removeUser(user: User) {
//   this.userService.deleteUser(user);
// }

// cancelEdits() {
//   this.editedUser = {};
//   this.editUserForm = false;
// }

// cancelNewUser() {
//   this.newUser = {};
//   this.userForm = false;
// }
