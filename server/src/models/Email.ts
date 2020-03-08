import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Email {

    constructor(id: number, value: string, isActive: boolean) {
        this.id = id;
        this.value = value;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    value: string;

    @Column()
    isActive: boolean;
}
