import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinateService } from './rider-coordinate.service';

describe('RiderCoordinateService', () => {
  let service: RiderCoordinateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiderCoordinateService],
    }).compile();

    service = module.get<RiderCoordinateService>(RiderCoordinateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
