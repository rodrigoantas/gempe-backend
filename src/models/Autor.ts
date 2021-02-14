import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity('autor')
class Autor {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

}

export default Autor