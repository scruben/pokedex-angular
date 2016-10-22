/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyApiClientServiceService } from './my-api-client-service.service';

describe('Service: MyApiClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyApiClientServiceService]
    });
  });

  it('should ...', inject([MyApiClientServiceService], (service: MyApiClientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
