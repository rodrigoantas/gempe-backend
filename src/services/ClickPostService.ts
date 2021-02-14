import BlogPostsRepository from '../repositories/BlogPostsRepository'
import BlogRepository from '../repositories/BlogRepository';
import AutorRepository from '../repositories/AutorRepository';




export default class ListAllPostsService {

  public async execute(id: string) {
    const blogPostsRepository = new BlogPostsRepository();
    const blogRepository = new BlogRepository();
    const autorRepository = new AutorRepository();

    const blogPosts = await blogPostsRepository.findAllPosts();

    const blogs = await blogRepository.findAllBlogs()
    
    const autors = await autorRepository.findAllAutors()


    const post =  blogPosts.find(blogPost => Number(blogPost.id) === Number(id));

    if (post) {
      const completePost = Object.assign(post, {blog: blogs.find(blog => {
      if (blog.id === post.site_id) {
        return Object.assign(blog,{ autor: autors.find(autor => autor.id === blog.autor_id)})
      }})})
      return completePost
    } else {
      throw new Error('This post does not exist.')
    }

  }
}