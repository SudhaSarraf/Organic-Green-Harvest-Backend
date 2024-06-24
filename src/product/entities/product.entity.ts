import { AbstractEntity } from 'src/common/abstract.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';// Import the Category enum
  
  export enum Category {
    FRUIT = 'FRUIT',
    VEGETABLE = 'VEGETABLE',
  }

  export enum Tags {
    ORGANIC = 'ORGANIC',
    SEASONAL = 'SEASONAL',
    EXOTIC = 'EXOTIC',
    LOCAL = 'LOCAL',
    FRESH = 'FRESH',
    CERTIFIED = 'CERTIFIED',
    GMO_FREE = 'GMO_FREE',
    FARM_FRESH = 'FARM_FRESH',
  }

  
  @Entity({ name: 'product' })
  export class ProductEntity extends AbstractEntity<ProductEntity>{
    @PrimaryGeneratedColumn('uuid')
    productId: string;
  
    @Column()
    name: string;
  
    @Column('text')
    description: string;
  
    @Column('decimal')
    price: number;
  
    @Column()
    images: string;
  
    @Column({ default: true })
    inStock: boolean;

    @Column('int')
    stock: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  
    @Column({
      type: 'enum',
      enum: Category,
    })
    category: Category;
  
    @Column({
      type: 'simple-array',
      nullable: true,
    })
    tags: Tags[];
  
    @Column({ nullable: true })
    organicCertification: string;
  
    @Column('decimal', { nullable: true })
    discountPrice: number;
  
    @Column({ nullable: true })
    supplier: string;
  
    @Column('date', { nullable: true })
    harvestDate: Date;

    @Column()
    creatorId: string;

    @Column({ length: 50, default: "unknown" })
    createdBy: string;

    @Column({ length: 50, default: null, nullable: true })
    updatedBy: string;

    @ManyToOne(() => UserEntity, (user) => user.product, { nullable: false, eager: true, cascade: ['insert', 'update'] })
    @JoinColumn({
        referencedColumnName: 'userId',
        name: 'creatorId',
    })
    user: UserEntity;
  }
  