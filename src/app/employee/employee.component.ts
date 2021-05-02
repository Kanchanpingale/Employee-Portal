import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { candidate_data } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee: candidate_data[];
  searchText = '';






  constructor(private empservice:EmployeeDetailsService) {
    this.employee=this.empservice.getEmployee();

   }
//sort by name
   public sortByName()
   {
     console.log("in sort function")
    this.employee=this.employee.sort((a, b) => {
      let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
   }

   //sort by date
   public sortByDate() {

    this.employee=this.employee.sort((a, b) => {

    if ( a.joining_date < b.joining_date ){
      return -1;
    }
    if ( a.joining_date > b.joining_date ){
      return 1;
    }
    return 0;
  });




  }
public dateSort()
{

  this.employee=this.employee.sort(function(a,b) {
    let x ;
    let y ;
  //  x = a.joining_date.split('/').reverse().join('');

   x = a.joining_date.split('/');
   for(var i=0;i<x.length;i++)
   {
    if(x[i].length <2) {
      x[i]= x[i].toString();
      x[i]= '0'+x[i];
      console.log(i+" : " +x[i]);
    }
   }
   let modifiedx =x.reverse().join('');

  // y = b.joining_date.split('/').reverse().join('');
   y = b.joining_date.split('/');
   for(var i=0;i<y.length;i++)
   {
    if(y[i].length <2) {
      y[i]= y[i].toString();
      y[i]= '0'+y[i];
      console.log(i+" : " +y[i]);
    }
   }
   let modifiedy =y.reverse().join('');


    // return a > b ? 1 : a < b ? -1 : 0;
    console.log(modifiedx+"modified x" +modifiedy+ "modifiedy ")
     return modifiedx.localeCompare(modifiedy);         // <-- alternative
  });

}




// remove department : development
 public deleteDept() {

  this.employee= this.employee.filter(text=>text.department!=='Development')

  return this.employee;

}


// public distinctValue()
// {
//   let unique=this.employee.filter((item,i,ar)=>ar.indexOf(item.department) === i)

// console.log(unique);
// }


public searchByExperiencr(){
  console.log("inside searchby exp");


  this.employee=this.employee.filter(text => this.calculatedifference(text.joining_date) > 2);
  console.log(this.employee);
}

public calculatedifference(date:string):number
{
console.log("inside calc")
  let d2:  Date=new Date();
  let d1=Date.parse(date);
  var timediff= d2.getDate()- d1;

  console.log("d2"+d2);
  console.log("d1"+d1);
  console.log("timediffernec "+timediff);
  var diff=timediff /(1000*3600*24);
  console.log(diff);
  return Math.floor(diff);

}


// public morethan2yrs()
// {

//   this.employee=this.employee.filter(function(a,b) {
//     let x ;
//     let y=new Date().getDate() ;

//     x = a.joining_date.split('/').reverse().join('');
//     console.log(" x "+ x +" y " +y);



//     //return a > b ? 1 : a < b ? -1 : 0;
//              // <-- alternative
//   });
// }


}

