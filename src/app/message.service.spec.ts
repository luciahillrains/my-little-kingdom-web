import { TestBed, inject } from '@angular/core/testing';

import { MessageService} from './message-service.service';

describe('MessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageServiceService]
    });
  });

  it('should be created', inject([MessageServiceService], (service: MessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
