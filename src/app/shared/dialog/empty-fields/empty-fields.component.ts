import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-empty-fields',
  templateUrl: './empty-fields.component.html',
  styleUrls: ['./empty-fields.component.scss']
})
export class EmptyFieldsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public close():void{
    this.dialog.closeAll();
  };
}
