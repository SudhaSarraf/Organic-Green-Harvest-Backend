
import { AbstractEntity } from "src/common/abstract.entity";
import { CompanyInfoEntity } from "src/compnay-info/entities/compnay-info.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'role'})
export class RoleEntity extends AbstractEntity<RoleEntity>{
    @PrimaryColumn()
    name: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    companyId: number;

    @ManyToMany(()=>UserEntity, user=> user.roles)
    users:UserEntity[]

    @ManyToOne(() => CompanyInfoEntity, company => company.roles)
    @JoinColumn({name: 'companyId'})
    companyInfo: CompanyInfoEntity;
}
