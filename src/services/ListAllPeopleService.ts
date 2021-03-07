import PeopleRepository from '../repositories/PeopleRepository'


export default class ListAllPeopleService {

  public async execute(searchQuery: string) {
    const peopleRepository = new PeopleRepository();


    if (searchQuery && searchQuery !== "undefined") {

      const people = await peopleRepository.findAllPeopleBySearch(searchQuery)

      return people;
      
    } else {

      const people = await peopleRepository.findAllPeople();

      return people;

    }
    
    

  }
}