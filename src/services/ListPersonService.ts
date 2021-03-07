import PeopleRepository from '../repositories/PeopleRepository'


export default class ListPersonService {

  public async execute(id: any) {
    const peopleRepository = new PeopleRepository();


    const person = await peopleRepository.findPerson(id)

    if (person) {
        return person
      }


  }
}