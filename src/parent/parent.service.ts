import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './entities/parent.entity';
import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';

@Injectable()
export class ParentService {
  constructor( 
    @InjectRepository(Parent) private parentRepository: Repository<Parent>,
) {}

  create(createParentDto: CreateParentDto) {
    const newParent = this.parentRepository.create(createParentDto);
    return this.parentRepository.save(newParent);
  }

  findAll() {
    return this.parentRepository.find({relations: ['children']})
  }

  findOne(id: number) {
    return this.parentRepository.find({id});
  }

  update(id: number, updateParentDto: UpdateParentDto) {
    return this.parentRepository.update(id, updateParentDto)
  }

  remove(id: number) {
    return this.parentRepository.delete(id);
  }
}
