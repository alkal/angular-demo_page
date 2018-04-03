import { NgModule } from '@angular/core';
import {MatCheckboxModule,MatRadioModule,MatSelectModule,MatInputModule,MatIconModule, MatDialogModule,MatButtonModule} from '@angular/material';

@NgModule({
  exports:[
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class MatComponentsModule { }
