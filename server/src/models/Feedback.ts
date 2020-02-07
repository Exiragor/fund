import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Feedback {

    constructor(id: number | null, name: string, phone: string, email: string, text: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.text = text;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({type: 'text'})
    text: string;
}