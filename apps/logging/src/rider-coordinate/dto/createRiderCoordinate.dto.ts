import { IsNotEmpty, IsNumber } from "class-validator";

export class createRiderCoordinateDto  {

    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @IsNotEmpty()
    @IsNumber()
    longitude: number;
    
    @IsNotEmpty()
    riderId: string;
    
    @IsNotEmpty()
    timestamp: Date;

}