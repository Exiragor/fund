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
        prefix: string,
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
        this.prefix = prefix;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sliderName: string;

    @Column({nullable: true})
    link: string;

    @Column({nullable: true})
    url: string;

    @Column({nullable: true})
    title: string;

    @Column({type: "text", nullable: true})
    text: string;

    @Column({nullable: true})
    order: number;

    @Column({nullable: true})
    photo: string;

    @Column({nullable: true})
    prefix: string;

    @Column()
    isActive: boolean;
}