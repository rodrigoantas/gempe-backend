import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import People from '../models/People';

interface IPeople {
  name: string;
  email: string;
  phone: string;
  id?: string;
}

class BookRepository {
  private ormRepository: MongoRepository<People>;

  constructor() {
    this.ormRepository = getMongoRepository(People);
  }


  public async addPerson({email, name, phone}: IPeople) {
    const person = this.ormRepository.create({
      name,
      email,
      phone
    })

    await this.ormRepository.save(person)

    return person;
  }

  public async findAllPeopleBySearch(searchQuery: string) {

    const people = await this.ormRepository.find({ where: {
       $or: [
         {name: {$regex: `${searchQuery}`, $options: 'si'}},
         {email: {$regex: `${searchQuery}`, $options: 'si'}},
       ]
    }});

    return people
  }

  public async findAllPeople() {
    const people = await this.ormRepository.find();


    return people
  }

  public async findPerson(id: any) {
    const findPerson = await this.ormRepository.findOne(id);
    if (findPerson) {
       return findPerson
    } else {
      throw new Error('Person not found.')
    }
  }

  public async deletePerson(id: any) {

    const findPerson = await this.ormRepository.findOne(id);

    if (findPerson) {
      await this.ormRepository.delete(findPerson)

    } else {
      throw new Error('Person not found.')
    }
  
    return
  }

  public async updatePerson({id, email, name, phone}: IPeople) {
    const findPerson = await this.ormRepository.findOne(id);

    if (findPerson) {
      findPerson.email = email;
      findPerson.name = name;
      findPerson.phone = phone;
      await this.ormRepository.save(findPerson)

      return findPerson;
    } else {
      throw new Error('Person not found.')
    }

    
  }

}

export default BookRepository;