import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from 'src/modules/roleModule/schema/role.model';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field(() => ID)
  id?: string;

  @Field(() => Role)
  @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
  role_id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  first_name: string;

  @Field()
  @Prop({ required: true })
  last_name: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Field()
  @Prop({ required: true })
  password: string;

  @Field()
  @Prop({ default: 'active' })
  status: string;

  @Field()
  @Prop({ default: 0 })
  is_deleted: number;

  @Field({ nullable: true })
  @Prop()
  login_with?: string;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
