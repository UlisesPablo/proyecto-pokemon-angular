import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yescancel-dialog',
  templateUrl: './yescancel-dialog.component.html',
  styleUrls: ['./yescancel-dialog.component.scss']
})
export class YesCancelDialogComponent implements OnInit {
  message: string = '';
  yes: string = '';
  no: string = '';
  constructor(public dialogRef: MatDialogRef<YesCancelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.message = data.message;
      this.yes = data.yes;
      this.no = data.no;
  }

  ngOnInit() {
    
  }

  public close(): void {
    this.dialogRef.close();
  }

}
