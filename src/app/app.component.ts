import { Component } from '@angular/core';
import { Student } from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A3martmanu';

  studentBio : Student = {
    studentNumber : 1234,
    fullName : "Manuel Martinez",
    username : "martmanu",
    program : "ISE",
    email : "martmanu@sheridancollege.ca",
    dow : "Wednesday", //Day of week
    picture : "assets/images/myProfile.png"
  }

  
}
