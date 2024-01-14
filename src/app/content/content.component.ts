import { Component, Input } from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() contentStudentBio! : Student;
  dow! : string;

  ngOnInit(): void { 
    this.dow = this.contentStudentBio.dow; 
  }

  thickSolidSquareColor : string = "blue";
  thickSolidRoundColor : string = "orange";
  thickDoubleSquareColor : string = "red";
  thickDoubleRoundColor : string = "green";

  curDate = new Date(); //Date function

  changeImgBorder(borderStyle : string, borderColour : string, borderEdges : string)
  {
    
    const imageElement = document.getElementById("myPic")!
    
    if (imageElement) {

      imageElement.style.borderWidth = "4px";
      imageElement.style.borderStyle = borderStyle;
      imageElement.style.borderColor = borderColour;
      
      if(borderEdges == 'round') {
        imageElement.style.borderRadius = "10px";
      }
      else{
        imageElement.style.borderRadius = "0px";
      }
    }
  }

}
