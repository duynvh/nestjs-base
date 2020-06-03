import { Injectable } from '@nestjs/common';
import {AutoMapper, Mapper, Configuration} from 'automapper-nartc';

@Injectable()
export class MapperService {
  mapper: AutoMapper;

  constructor() {
    this.mapper = Mapper;
    this.initializeMapper();
  }

  private initializeMapper(): void {
    this.mapper.initialize(MapperService.configure);
  }

  private static configure(config: Configuration): void {

  }
}
