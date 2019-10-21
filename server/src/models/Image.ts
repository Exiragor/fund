import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Image {

    constructor(id: number | null, name: string, filePath: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.filePath = filePath;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    name: string;

    @Column()
    filePath: string;

    @Column()
    isActive: boolean;
}