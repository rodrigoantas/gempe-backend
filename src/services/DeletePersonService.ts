import PeopleRepository from '../repositories/PeopleRepository'


export default class DeletePersonService {

  public async execute(id: any) {
    const peopleRepository = new PeopleRepository();


    await peopleRepository.deletePerson(id);


  }
}