import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


/** Mateterial */
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


/** Components */


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDividerModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,

    MatExpansionModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    TranslateModule
  ]

})
export class SharedModule { }
