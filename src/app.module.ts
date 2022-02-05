import { Child } from './child/entities/child.entity';
import { Parent } from './parent/entities/parent.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { ParentModule } from './parent/parent.module';
import { ChildModule } from './child/child.module';

const config: MysqlConnectionOptions =  {
  type: 'mysql',
  database: 'frozenlogic',
  username: 'root',
  password: 'development',
  entities: [Parent, Child],
  synchronize: true,
};

@Module({
  imports: [ParentModule, ChildModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}