import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity()
export class Slide {

    constructor(
        id: number,
        name: string,
        link: string,
        url: string,
        title: string,
        text: string,
        order: number,
        photo: string,
        isActive: boolean
    ) {
        this.id = id;
        this.sliderName = name;
        this.link = link;
        this.url = url;
        this.title = title;
        this.text = text;
        this.order = order;
        this.photo = photo;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sliderName: string;

    @Column()
    link: string;

    @Column()
    url: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    order: number;

    @Column()
    photo: string;

    @Column()
    isActive: boolean;
}