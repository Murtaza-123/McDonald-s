import { Module } from '@nestjs/common';
import { McDonaldService } from './mcdonald.service';
import { McDonaldController } from './Mcdonald.controller';
import { MapService } from './Map.service';

@Module({
  controllers: [McDonaldController],
  providers: [McDonaldService , MapService]
})
export class McdonaldModule {}
