import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Content {

    constructor(id: number | null, name: string, alias: string, value: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.value = value;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    name: string;

    @Column()
    alias: string;

    @Column({type: "text"})
    value: string;

    @Column()
    isActive: boolean;
}