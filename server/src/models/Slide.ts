import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {Image} from "./Image";

@Entity()
export class Slide {

    constructor(id: number, name: string, image: Image, link: string, title: string, text: string, isActive: boolean) {
        this.id = id;
        this.sliderName = name;
        this.image = image;
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
    image: Image;

    @Column()
    link: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    isActive: boolean;
}