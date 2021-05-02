import { Injectable } from '@angular/core';
import { candidate_data } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {


   getEmployee():candidate_data[]
   {
     return [{

    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "8/10/2021"
},
{"id": 12,"name": "John","department": "HR","joining_date": "2/1/2021"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "3/1/2021"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "4/1/2021"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "12/8/2021"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2021"},
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2021"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8/12/2021"},
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2021"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}
]




     }

  }
