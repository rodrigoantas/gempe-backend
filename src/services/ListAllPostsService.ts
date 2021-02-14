import BlogPostsRepository from '../repositories/BlogPostsRepository';
import BlogRepository from '../repositories/BlogRepository';
import AutorRepository from '../repositories/AutorRepository';



export default class ListAllPostsService {

  public async execute(searchParam: string) {
    const blogPostsRepository = new BlogPostsRepository();
    const blogRepository = new BlogRepository();
    const autorRepository = new AutorRepository();

    const posts = await blogPostsRepository.findAllPostsWithSearchQuery(searchParam);

    const blogs = await blogRepository.findAllBlogs()
    
    const autors = await autorRepository.findAllAutors()


    const AllBlogPosts = await Promise.all([posts, blogs, autors]).then(([posts, blogs, autors]) => posts.map(post => Object.assign(post, {blog: blogs.find(blog => {
       if (blog.id === post.site_id) {
         return Object.assign(blog,{ autor: autors.find(autor => autor.id === blog.autor_id)})
       }
     })})))

     AllBlogPosts.map(post => delete post.url);

     return AllBlogPosts;
  }

}