import { Module } from '@nestjs/common';
import { RiderCoordinateService } from './rider-coordinate.service';
import { RiderCoordinateController } from './rider-coordinate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateSchema } from './schemas/rider-coordinate.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: RiderCoordinate.name, schema: RiderCoordinateSchema }
        ])
    ],
    providers: [RiderCoordinateService],
    controllers: [RiderCoordinateController]

})
export class RiderCoordinateModule { }
