import { getRepository, Repository } from 'typeorm';

import Autor from '../models/Autor';

class AutorRepository {
  private ormRepository: Repository<Autor>;

  constructor() {
    this.ormRepository = getRepository(Autor);
  }


  public async findAllAutors() {
    const allAutors = await this.ormRepository.find()

    return allAutors;
  }
}

export default AutorRepository;