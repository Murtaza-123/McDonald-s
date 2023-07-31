import { Controller, Post, Body, Req, Get, Param } from '@nestjs/common';
import { Request } from 'express';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponseDto } from './dto/ResponseDto';
import { CreateMcdonaldDto } from './dto/create-mcdonald.dto';
import { MapService } from './Map.service';

@Controller('api/v1/chat')
export class McDonaldController {
  private count;
  constructor(private readonly mapService: MapService) {}
  @ApiOkResponse({
    description: "Welcome to McDonald's",
    type: ResponseDto,
  })
  @Post()
  create(
    @Req() req: Request,
    @Body() createMcdonaldDto: CreateMcdonaldDto,
  ): Promise<ResponseDto> {
    this.count = 1;
    const call_id = req.body.call_id;
    if (!this.mapService.getMap().has(call_id)) {
      this.mapService.setMapValue(call_id, { counter: this.count });
      const welcomeMessage = "Hi! Welcome to McDonald's. How are you doing?";
      const responseDto: ResponseDto = { message: welcomeMessage };
      return Promise.resolve(responseDto);
    } else {
      const conversation = {
        'What is your Menu': [
          'Big Mac',
          'Quarter Pounder with Cheese',
          'Filet-O-Fish',
          'Chicken McNuggets',
          'McChicken',
          'McDouble',
          'French Fries',
          'Apple Pie',
          'Sundae',
          'McFlurry',
        ]
          .join(' , ')
          .toString(),
        'Show me the list of beef burgers': [
          'Big Mac',
          'Quarter Pounder with Cheese',
          'McDouble',
          'Hamburger',
          'Cheeseburger',
          'Double Cheeseburger',
          'Bacon Cheeseburger',
          'Deluxe Quarter Pounder',
          'Bacon McDouble',
          'Bacon Quarter Pounder',
        ]
          .join(' , ')
          .toString(),
      };
      this.count++;
      console.log(this.count);
      this.mapService.setMapValue(call_id, { counter: this.count });
      const message = req.body.message;
      const response = conversation[message];
      console.log(this.mapService.getMap());
      return response;
    }
  }

  @Get(':call_id')
  async callRecords(@Param('call_id') call_id: number) {

   const count = this.mapService.getMap().get(call_id);
   console.log(count);
  }
}
