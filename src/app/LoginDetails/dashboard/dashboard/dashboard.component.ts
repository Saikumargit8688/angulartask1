import { Component } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';

import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement{
  checkbox:boolean;
  sno:number;
  name:string;
  place:string;
  description:string;
  date:string
}

const ELEMENT_DATA:PeriodicElement[]=[];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  displayedColumns:string[]=['checkbox','sno','name','place','description','date'];

  dataSource=ELEMENT_DATA;

  selection=new SelectionModel<Element>(true,[]);

  allpaymentsData=[];

constructor(private matDialog:MatDialog){}



deleteDialog(){


}

deleteSelectedRows(){
  this.dataSource=this.dataSource.filter(row => !row.checkbox);
}

isAllSelected(){
  const numSelected =this.dataSource.filter(row => row.checkbox).length;
  const numRows =this.dataSource.length;
  return numSelected === numRows;
}


isIndeterminate(){
  const numSelected =this.dataSource.filter(row => row.checkbox).length;
  const numRows =this.dataSource.length;
  return numSelected > 0 && numSelected < numRows;
}


masterToggle(){
  const isAllSelected= this.isAllSelected();
  this.dataSource.forEach(row => row.checkbox = !isAllSelected);
}











  //public data="I am Coming From Parent"

public data=[
  {
    name: "Angular",
    fee: 15000
  },
  {
    name:"Mahendra",
    age:25
  }
]
 public message:any
method1(e:any){
this.message=e
}



  }














