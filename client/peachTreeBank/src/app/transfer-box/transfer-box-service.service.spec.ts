import { TestBed } from '@angular/core/testing';

import { TransferBoxService } from './transfer-box-service.service';

describe('TransferBoxServiceService', () => {
  let service: TransferBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
