import { TestBed } from '@angular/core/testing';

import { RecentTransactionsServiceService } from './recent-transactions-service.service';

describe('RecentTransactionsServiceService', () => {
  let service: RecentTransactionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentTransactionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
