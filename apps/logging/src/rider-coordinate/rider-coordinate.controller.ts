import { Body, Controller, Get, Post } from '@nestjs/common';
import { createRiderCoordinateDto } from './dto/createRiderCoordinate.dto';
import { RiderCoordinateService } from './rider-coordinate.service';

@Controller('rider-coordinate')
export class RiderCoordinateController {
    constructor(private readonly riderCoordinateService: RiderCoordinateService) { }
    @Get()
    getRiderCoordinates() {
        return this.riderCoordinateService.getRiderCoordinates();
    }

    @Post()
    saveRiderCoordinates(@Body() CreateRiderCoordinateDto: createRiderCoordinateDto) {
        return this.riderCoordinateService.saveRiderCoordinate(CreateRiderCoordinateDto);
    }

}
