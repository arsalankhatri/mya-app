import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTabComponent } from './album-tab.component';

describe('AlbumTabComponent', () => {
  let component: AlbumTabComponent;
  let fixture: ComponentFixture<AlbumTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
