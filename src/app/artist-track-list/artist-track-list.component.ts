import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators,ReactiveFormsModule  } from '@angular/forms';
import 'rxjs/Rx'



function emailDomainValidator(control: FormControl) { 
  let email = control.value; 
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if (domain !== "cloudcall.com") { 
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null; 
}


@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
actual:string;
searchField:FormControl;
searches:string[]=[];

myform:FormGroup;
firstName: FormControl; 
lastName: FormControl;
email: FormControl;
password: FormControl;
language: FormControl;
langs: string[] = [
  'English',
  'French',
  'German',
]
  constructor(private route:ActivatedRoute) {
  
  
    route.parent.params.subscribe(data=>{
      this.actual=data['crossid'];
    })
   }

  ngOnInit() {
this.searchField=new FormControl();
this.searchField.valueChanges
.debounceTime(1000)
.distinctUntilChanged()
.subscribe(term=>{
  this.searches.push(term);
})


    this.createFormControls();
    this.createForm();
  }


  createFormControls() { 
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
      emailDomainValidator
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }


  createForm() { 
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit(){
    console.log('clicked?');
    if(this.myform.valid){
      console.log("Submitted!!",this.myform.value)
      this.myform.reset();
    }
    else {
      console.log('Enter required field');
    }
  }


  

}
