import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinate.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinateService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel: Model<RiderCoordinate>,) { }


    async getRiderCoordinates(): Promise<RiderCoordinate[]> {
        return this.riderCoordinateModel.find().exec();

        //communicate with the database to get all rider coordinates
        
    }
    
    async saveRiderCoordinate(coordinateData: Partial<RiderCoordinate>): Promise<RiderCoordinate> {
        const newCoordinate = new this.riderCoordinateModel(coordinateData);
        return newCoordinate.save();
    }

    async findRiderCoordinateById(id: string): Promise<RiderCoordinate | null> {
        return this.riderCoordinateModel.findById(id).exec();
    }

    async deleteRiderCoordinateById(id: string): Promise<RiderCoordinate | null> {
        return this.riderCoordinateModel.findByIdAndDelete(id).exec();
    }

    async updateRiderCoordinateById(id: string, updateData: Partial<RiderCoordinate>): Promise<RiderCoordinate | null> {
        return this.riderCoordinateModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

}

