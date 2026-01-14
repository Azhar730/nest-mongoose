import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}
    @Post()
    create(){
        return this.productService.createProduct()
    }
    @Get()
    get(){
        return this.productService.getAllProducts()
    }
}
