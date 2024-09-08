import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../userModule/schema/user.model';
import { Survey } from '../../surveyModule/schema/survey.model';

export type SurveyCommentDocument = SurveyComment & Document;

@ObjectType()
@Schema()
export class SurveyComment {
  @Field(() => ID)
  id?: string;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Field(() => Survey)
  @Prop({ type: Types.ObjectId, ref: 'Survey', required: true })
  survey_id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  comment: string;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  updated_at: Date;
}

export const SurveyCommentSchema = SchemaFactory.createForClass(SurveyComment);
