import { Component, Input } from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() footerStudentBio! : Student;
}
