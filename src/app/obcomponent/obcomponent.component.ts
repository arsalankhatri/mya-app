import { Component, OnInit } from '@angular/core';

import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import {FormBuilder, FormGroup, Validator, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';



import {SearchserviceService, SearchItem} from '../searchservice.service';
import { Scheduler } from 'rxjs/Scheduler';

@Component({
  selector: 'app-obcomponent',
  templateUrl: './obcomponent.component.html',
  styleUrls: ['./obcomponent.component.css']
})
export class ObcomponentComponent implements OnInit {
apiroot= 'http://httpbin.org/';
public loading= false;
public results: Observable<SearchItem[]>;
public searchField: FormControl;

public data:any;




  constructor(private http: Http, private service: SearchserviceService) {


  }

  ngOnInit() {


this.data=this.service.obfunction().debounceTime(400).subscribe((data)=>{
console.log(data);
})
    this.searchField = new FormControl();
   this.results = this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .do(() => this.loading = true)
    .switchMap(term => this.service.observablesearch(term))
    .do(() => this.loading = false);
  }

  sendrequest(){
    const url = `${this.apiroot}/get`;
    this.http.get(url).subscribe(res => {
      console.log(res.json());
    });
  }


  doSearch(term: string){
    this.loading = true;
    //PROMISE
    // this.service.search(term).then(()=>{
    //   this.loading=false;
    // });


    //OBSERVABLE
     this.results = this.service.observablesearch(term);
  }

}
