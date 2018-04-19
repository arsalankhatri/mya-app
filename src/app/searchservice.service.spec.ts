import { TestBed, inject } from '@angular/core/testing';

import { SearchserviceService } from './searchservice.service';
import { Http,HttpModule } from '@angular/http';


describe('SearchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SearchserviceService]
    });
  });

  it('should be created', inject([SearchserviceService], (service: SearchserviceService) => {
    expect(service).toBeTruthy();

  }));
});
