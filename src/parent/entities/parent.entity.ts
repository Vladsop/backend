import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from './../../child/entities/child.entity';

@Entity()
export class Parent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Child, child => child.parent,{ cascade: true })
    children: Child[];

}
