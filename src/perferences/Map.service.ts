
import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
  private map: Map<number, object>;

  constructor() {
    this.map = new Map<number, object>();
  }

  getMap(): Map<number, object> {
    return this.map;
  }

  setMapValue(key: number, value: object): void {
    this.map.set(key, value);
  }
  

}
