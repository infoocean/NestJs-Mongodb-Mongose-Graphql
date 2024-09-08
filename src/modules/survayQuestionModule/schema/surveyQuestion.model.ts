import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/modules/userModule/schema/user.model';
import { Survey } from 'src/modules/surveyModule/schema/survey.model';

export type SurveyQuestionDocument = SurveyQuestion & Document;

@ObjectType()
@Schema()
export class SurveyQuestion {
  @Field(() => ID)
  id?: string;

  @Field(() => Survey)
  @Prop({ type: Types.ObjectId, ref: 'Survey', required: true })
  survey_id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  question: string;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  created_by: Types.ObjectId;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;
}

export const SurveyQuestionSchema =
  SchemaFactory.createForClass(SurveyQuestion);
