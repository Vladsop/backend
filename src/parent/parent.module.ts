import { Parent } from './entities/parent.entity';
import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parent])],
  controllers: [ParentController],
  providers: [ParentService]
})
export class ParentModule {}
