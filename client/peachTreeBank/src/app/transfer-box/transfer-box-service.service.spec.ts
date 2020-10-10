import { TestBed } from '@angular/core/testing';

import { TransferBoxServiceService } from './transfer-box-service.service';

describe('TransferBoxServiceService', () => {
  let service: TransferBoxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferBoxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
