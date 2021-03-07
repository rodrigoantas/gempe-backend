import { ObjectID, Entity, ObjectIdColumn, Column, CreateDateColumn,
  UpdateDateColumn, } from 'typeorm';


@Entity('people')
class Book {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}

export default Book;