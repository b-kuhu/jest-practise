import { Entity,Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()

export class Animal{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    breed:string

  
}