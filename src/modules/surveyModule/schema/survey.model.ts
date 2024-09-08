import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/modules/userModule/schema/user.model';

export type SurveyDocument = Survey & Document;

@ObjectType()
@Schema()
export class Survey {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true, default: 'active' })
  status: string;

  @Field()
  @Prop({ required: true })
  image_url: string;

  @Field()
  @Prop({ required: true })
  video_url: string;

  @Field()
  @Prop({ required: true })
  primary_question: string;

  @Field()
  @Prop({ required: true })
  option_a_question: string;

  @Field()
  @Prop({ required: true })
  option_b_question: string;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  created_by: Types.ObjectId;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
