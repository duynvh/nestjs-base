import { Document } from 'mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SchemaOptions } from '@nestjs/mongoose';

export interface BaseModel extends Document {
  createdAt?: Date;
  updatedAt?: Date;
};

export class BaseModelVm {
  @ApiPropertyOptional({type: String, format: 'date-time'})
  createdAt?: Date;

  @ApiPropertyOptional({type: String, format: 'date-time'})
  updatedAt?: Date;

  @ApiPropertyOptional()
  id?: string;
};

export const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  timestamps: true
}