import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parent } from './../../parent/entities/parent.entity';

@Entity()
export class Child {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    parentId: number;

    @ManyToOne(() => Parent, parent => parent.children)
    @JoinColumn({name: "parentId"})
    parent: Parent;
   
}
