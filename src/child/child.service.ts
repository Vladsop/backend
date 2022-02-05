import { Child } from './entities/child.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
  constructor( 
    @InjectRepository(Child) private childRepository: Repository<Child>,
) {}

  create(createChildDto: CreateChildDto) {
    const newChild = this.childRepository.create(createChildDto);
    return this.childRepository.save(newChild);
  }

  findAll() {
    return this.childRepository.find({relations: ["parent"]})
  }

  findChildByParentId(parentId: number) {
    return this.childRepository.find({parentId})
  }

  findOne(id: number) {
    return this.childRepository.find({id})
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.childRepository.update(id, updateChildDto);
  }

  remove(id: number) {
    return this.childRepository.delete(id);
  }
}
