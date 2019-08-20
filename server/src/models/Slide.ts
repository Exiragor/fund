import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity()
export class Slide {

    constructor(id: number, name: string, link: string, title: string, text: string, isActive: boolean) {
        this.id = id;
        this.sliderName = name;
        this.link = link;
        this.title = title;
        this.text = text;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sliderName: string;

    @Column()
    link: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    isActive: boolean;
}