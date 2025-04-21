import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;


@Schema({ timestamps: true })
export class RiderCoordinate {
    @Prop({ required: true })
    riderId: string;

    @Prop({ required: true })
    latitude: number;

    @Prop({ required: true })
    longitude: number;

    @Prop({ default: Date.now })
    timestamp: Date;
}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);