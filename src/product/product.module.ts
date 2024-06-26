import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { FilesModule } from 'src/files/files.module';
import { FilesService } from 'src/files/files.service';
import { UserService } from 'src/user/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), FilesModule ],
  controllers: [ProductController],
  providers: [ProductService, FilesService, UserService],
  exports: [ProductService]
})
export class ProductModule {}
