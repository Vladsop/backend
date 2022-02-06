import { Child } from './../../child/entities/child.entity';
export class CreateParentDto {
    id: number;
    name: string;
    children: [Child];
}
