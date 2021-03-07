import {Router} from 'express';

import ListAllPeopleService from '../services/ListAllPeopleService'
import CreatePersonService from '../services/CreatePersonService'
import ListPersonService from '../services/ListPersonService'
import UpdatePersonService from '../services/UpdatePersonService'
import DeletePersonService from '../services/DeletePersonService'



const routes = Router();

routes.post('/people', async (request, response) => {
  try {
    const {name, email, phone } = request.body;

    const createPersonService = new CreatePersonService();

    const person = await createPersonService.execute({ email, name, phone })

    return response.status(201).json(person)

  } catch (err) {

    return response.status(400).json({ error: err.message });

  }
})

routes.get('/people', async (request, response) => {
  try {

    const {q} = request.query

    const listAllPeopleService = new ListAllPeopleService();


    const peopleList = await listAllPeopleService.execute(String(q));


    return response.json(peopleList);


  } catch(err) {

    return response.status(400).json({ error: err.message });

  }

})

routes.get('/people/:id', async (request, response) => {
  try {

    const { id } = request.params

    const listPersonService = new ListPersonService();


    const person = await listPersonService.execute(id);


    return response.json(person);


  } catch(err) {

    return response.status(400).json({ error: err.message });

  }

})

routes.put('/people/:id', async (request, response) => {
  try {

    const { id } = request.params

    const { email, phone, name } = request.body

    const updatePersonService = new UpdatePersonService();


    const person = await updatePersonService.execute({id , email, phone, name});


    return response.json(person);


  } catch(err) {

    return response.status(400).json({ error: err.message });

  }

})

routes.delete('/people/:id', async (request, response) => {
  try {

    const { id } = request.params


    const deletePersonService = new DeletePersonService();


    const person = await deletePersonService.execute(id);


    return response.status(204).json();


  } catch(err) {

    return response.status(400).json({ error: err.message });

  }

})

export default routes;