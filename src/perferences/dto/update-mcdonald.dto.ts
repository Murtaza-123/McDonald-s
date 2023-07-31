import { PartialType } from '@nestjs/mapped-types';
import { CreateMcdonaldDto } from './create-mcdonald.dto';

export class UpdateMcdonaldDto extends PartialType(CreateMcdonaldDto) {}
