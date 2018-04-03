import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.css']
})
export class MaterialPageComponent {

  constructor(private dialog: MatDialog) {}
  
  optionSelection;foodSelection;foodSelectedName;
  
  foods = [
    {value: 'steak-0', name: 'Steak'},
    {value: 'pizza-1', name: 'Pizza'},
    {value: 'tacos-2', name: 'Tacos'}
  ];

  log(x){
    for (var i=0;i<this.foods.length;i++){
      console.log(i);
      if(this.foods[i].value===x){
        this.foodSelectedName=this.foods[i].name;
        break;
      }
    }
  }
  
  openDialog(){
    this.dialog.open(ModalWindowComponent,{
      width: '90%'
    });
  }

}
