import { TestBed } from '@angular/core/testing';

import { Users.Service } from './users..service';

describe('Users.Service', () => {
  let service: Users.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
