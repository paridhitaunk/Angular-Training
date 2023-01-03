import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CeoDialogComponent } from './ceo-dialog/ceo-dialog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-website';
  constructor(public dialog: MatDialog)
  {
    
  }
  openDialogue()
  {
    this.dialog.open(CeoDialogComponent);
  }

  openDialoguecontact()
  {
    this.dialog.open(ContactUsComponent);
  }
}
