import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { McdonaldModule } from './perferences/Mcdonald.module';
import { MapService } from './perferences/Map.service';

@Module({
  imports: [McdonaldModule],
  controllers: [AppController],
  providers: [AppService , MapService]
})
export class AppModule {}
