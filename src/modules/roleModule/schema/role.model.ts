import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@ObjectType()
@Schema()
export class Role {
  @Field(() => ID)
  id?: string;

  @Field()
  @Prop({ required: true })
  role: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
