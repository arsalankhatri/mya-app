import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ObcomponentComponent } from './obcomponent.component';
import { HttpModule } from '@angular/http';
import { SearchserviceService } from '../searchservice.service';

describe('ObcomponentComponent', () => {
  let component: ObcomponentComponent;
  let fixture: ComponentFixture<ObcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObcomponentComponent ],
      imports: [FormsModule,ReactiveFormsModule,HttpModule],
      providers:[SearchserviceService]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
