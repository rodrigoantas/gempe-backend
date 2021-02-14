import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import Blog from './Blog';


@Entity('blog_post')
class BlogPosts {
  @PrimaryColumn()
  id: number;

  @Column()
  titulo: string;
  
  @Column()
  resumo: string;

  @Column()
  cliques: string;

  @Column()
  data_inclusao: string;

  @Column()
  data_publicacao: string;

   @Column()
  votos_positivos: number;

  @Column()
  votos_negativos: number;

  @Column()
  favoritos: number;

  @Column()
  comentarios: number;

  @Column()
  url?: string;

  @Column()
  @ManyToOne(()=> Blog)
  @JoinColumn({ name: 'id' })
  site_id: number;

}

export default BlogPosts