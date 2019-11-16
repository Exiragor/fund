import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Projects {

    constructor(
        id: number | null, name: string, category: string, description: string, text: string,
        link: string, photo: string, order: number, isActive: boolean
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.text = text;
        this.link = link;
        this.photo = photo;
        this.order = order;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column({type: "text"})
    description: string;

    @Column({type: "text"})
    text: string;

    @Column({nullable: true})
    link: string;

    @Column()
    photo: string;

    @Column({nullable: true})
    order: number;

    @Column()
    isActive: boolean;
}