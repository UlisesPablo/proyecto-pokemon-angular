import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-backless',
  templateUrl: './backless.component.html',
  styleUrls: ['./backless.component.scss']
})
export class BacklessComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public close(){
    this.dialog.closeAll();
  }

}
