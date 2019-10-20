import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class News {

    constructor(id: number, title: string, desc: string, text: string, photo: string, isActive: boolean) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.text = text;
        this.photo = photo;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: "text"})
    text: string;

    @Column()
    photo: string;

    @Column()
    isActive: boolean;
}