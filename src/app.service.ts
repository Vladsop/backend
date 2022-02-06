import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'REST API with CRUD (Create, Read, Update, Delete) operations. Start using it with /parent or /children path.';
  }
}
