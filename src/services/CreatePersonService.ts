import PeopleRepository from '../repositories/PeopleRepository'

interface IPeople {
  name: string;
  email: string;
  phone: string;
}

export default class CreatePersonService {

  public async execute({email, name, phone}: IPeople) {
    const peopleRepository = new PeopleRepository();
    
    const people = await peopleRepository.addPerson({
      email,
      name,
      phone,
    });

    return people;

  }
}