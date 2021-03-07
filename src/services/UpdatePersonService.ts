import PeopleRepository from '../repositories/PeopleRepository'

interface IPeople {
  name: string;
  email: string;
  phone: string;
  id: string;
}

export default class DeletePersonService {

  public async execute({id, email, name, phone}: IPeople) {
    const peopleRepository = new PeopleRepository();


    const person = await peopleRepository.updatePerson({id, email, name, phone});

    return person;


  }
}