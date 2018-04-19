import { Component, OnInit } from '@angular/core';
import { Contact } from "../class/contact";
import { WindowRefService } from '../window-ref.service';
import {QueryBuilderConfig} from 'angular2-query-builder';
import { SearchserviceService } from '../searchservice.service';
import { Observable } from 'rxjs/Observable';

declare let sforce: any;

@Component({
  selector: 'app-staticcomponent',
  templateUrl: './staticcomponent.component.html',
  styleUrls: ['./staticcomponent.component.css']
})

export class StaticcomponentComponent implements OnInit {
  title:'Static component';
  stringdata:string='';
  query = {
    condition: 'and',
    rules: []
    // rules: [
    //   {field: "age", operator: "<="},
    //   {field: "birthday", operator: ">="},
    //   {
    //     condition: 'or',
    //     rules: [
    //       {field: "gender", operator: "="},
    //       {field: "occupation", operator: "in"},
    //       {field: "school", operator: "is null"}
    //     ]
    //   }
    // ]
  };
  config: QueryBuilderConfig = {
    fields: {
      "age": {name: "Age", type: 'number'},
      "gender": {
        name: "Gender",
        type: 'category',
        options: [
          {name: "Male", value: "m"},
          {name: "Female", value: "f"}
        ]
      },
      "name": {name: "Name", type: 'string'},
      "educated": {name: "College Degree?", type: 'boolean'},
      "birthday": {name: "Birthday", type: 'date'},
      "school": {name: "School", type: 'string', nullable: true},
      "occupation": {
        name: "Occupation",
        type: 'string',
        options: [
          {name: "Student", value: "student"},
          {name: "Teacher", value: "teacher"},
          {name: "Unemployed", value: "unemployed"},
          {name: "Scientist", value: "scientist"}
        ]
      }
    }
  };






  contacts: Contact[] ;//= JSON.parse(sforce.apex.execute("ModernSalesforce", "getContacts", {}));
  constructor(private winRef: WindowRefService,private service:SearchserviceService) {
    
  //   console.log(winRef);
  //   console.log(winRef.nativeWindow.parent);
    winRef.nativeWindow.parent.ModernSalesforce.getContacts((result,event)=>{
    console.log(result);
      this.contacts=JSON.parse(result);
   },{escape : false})
    
  //  this.contacts=[]
   }

  ngOnInit() {
  }

  adddata(){
    this.stringdata='';
    console.log(this.loadquery(this.query));
    this.service.adddata();
  }


  loadquery(data){

    let rows=data.rules.length;
   data.rules.map((data2,i)=>{
  
     
     if(data2.rules){
      this.stringdata+= '( ';
        this.loadquery(data2);
        this.stringdata+= ')';
        if(rows>i+1){
          this.stringdata += data.condition+' ';
         }
        
     }
     else
     {
       this.stringdata += data2.field+ ' ' +data2.operator+' "'+data2.value+ '" ';
       if(rows>i+1){
        this.stringdata += data.condition+' ';
       }
       
       return data2;
     }
    })
    return this.stringdata;
  }



}
