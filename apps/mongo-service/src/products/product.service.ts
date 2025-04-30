import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async create(createProductDto: any): Promise<Product> {
        const newProduct = new this.productModel(createProductDto);
        return newProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }


    async findOne(id: string): Promise<Product | null> {
        return this.productModel.findById(id).exec();
    }

    async update(id: string, updateProductDto: any): Promise<Product | null> {
        return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Product | null> {
        return this.productModel.findByIdAndDelete(id).exec();

    }
}