import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinateController } from './rider-coordinate.controller';

describe('RiderCoordinateController', () => {
  let controller: RiderCoordinateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderCoordinateController],
    }).compile();

    controller = module.get<RiderCoordinateController>(RiderCoordinateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
