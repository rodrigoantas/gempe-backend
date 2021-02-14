import { getRepository, Repository, Like } from 'typeorm';

import BlogPosts from '../models/BlogPosts';


class BlogPostsRepository {
  private ormRepository: Repository<BlogPosts>;

  constructor() {
    this.ormRepository = getRepository(BlogPosts);
  }


  public async findAllPosts() {
   
    const allPosts = await this.ormRepository.find({order: {data_publicacao: 'DESC'}})

    return allPosts;
    }
   

  public async findAllPostsWithSearchQuery(searchQuery: string) {
    if (searchQuery){
      const postsWithSearchQuery = await this.ormRepository.find({where: [
        {titulo: Like(`%${searchQuery}%`)},
        {resumo: Like(`%${searchQuery}%`)},
      ], order: {data_publicacao: 'DESC' }})



      return postsWithSearchQuery
    } else {
      const allPosts = await this.ormRepository.find({order: {data_publicacao: 'DESC'}})

    return allPosts;
    }

    
  }
}

export default BlogPostsRepository;