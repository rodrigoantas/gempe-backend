import { getRepository, Repository } from 'typeorm';

import Blog from '../models/Blog';
import BlogPosts from '../models/BlogPosts'

class BlogRepository {
  private ormRepository: Repository<Blog>;

  constructor() {
    this.ormRepository = getRepository(Blog);
  }


  public async findAllBlogs() {
    const allBlogs = await this.ormRepository.find()

    return allBlogs;
  }

   public async findBlogsFromBlogPosts(posts: BlogPosts[]) {

    const blogPostsWithBlogs = Promise.all(posts.map(async post => {
    const blogPostWithBlog = await this.ormRepository.findOne( post.site_id)

    return blogPostWithBlog

    }))
  
    
    return blogPostsWithBlogs;
   }


   
}

export default BlogRepository;