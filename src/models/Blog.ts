import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity('site')
class Blog {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  ativo: boolean;

  @Column()
  autor_id: number;


}

export default Blog