import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticcomponentComponent } from './staticcomponent.component';
import { QueryBuilderModule } from 'angular2-query-builder';
import { WindowRefService } from '../window-ref.service';

describe('StaticcomponentComponent', () => {
  let component: StaticcomponentComponent;
  let fixture: ComponentFixture<StaticcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticcomponentComponent ],
      imports:[QueryBuilderModule],
      providers:[WindowRefService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(StaticcomponentComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(StaticcomponentComponent).toBeTruthy();
  });
});
