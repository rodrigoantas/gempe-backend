import {Router} from 'express';

import ListAllPostsService from '../services/ListAllPostsService';
import ClickPostService from '../services/ClickPostService';





const routes = Router();

routes.get('/posts/', async (request, response) => {
  try {

    const { search } = request.query;

   const listAllPostsService = new ListAllPostsService();

   const allPostsList = await listAllPostsService.execute(String(search));


   return response.json(allPostsList);


  } catch(err) {

    console.log(err)

  }

})

routes.get('/posts/clique/:id', async (request, response) => {
  try {

    const { id } = request.params

    const clickPostService = new ClickPostService();

   const post = await clickPostService.execute(id);

   return response.json(post);


  } catch (err) {
    console.log(err)
  }
})

export default routes;