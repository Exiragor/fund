import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class File {

    constructor(id: number | null, filePath: string, fileType: string, name: string, prefix: string, isActive: boolean) {
        this.id = id;
        this.filePath = filePath;
        this.fileType = fileType;
        this.name = name;
        this.prefix = prefix;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    filePath: string;

    @Column()
    fileType: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    prefix: string;

    @Column()
    isActive: boolean;
}