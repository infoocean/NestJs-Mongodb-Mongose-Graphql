import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../userModule/schema/user.model';
import { Survey } from '../../surveyModule/schema/survey.model';
import { SurveyQuestion } from '../../survayQuestionModule/schema/surveyQuestion.model';

export type SurveyQuestionAnswerDocument = SurveyQuestionAnswer & Document;

@ObjectType()
@Schema()
export class SurveyQuestionAnswer {
  @Field(() => ID)
  id?: string;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Field(() => Survey)
  @Prop({ type: Types.ObjectId, ref: 'Survey', required: true })
  survey_id: Types.ObjectId;

  @Field(() => SurveyQuestion)
  @Prop({ type: Types.ObjectId, ref: 'SurveyQuestion', required: true })
  question_id: Types.ObjectId;

  @Field({ nullable: true })
  @Prop()
  answer?: string;

  @Field({ nullable: true })
  @Prop()
  primary_answer?: string;

  @Field({ nullable: true })
  @Prop()
  primary_question_answer?: string;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;
}

export const SurveyQuestionAnswerSchema =
  SchemaFactory.createForClass(SurveyQuestionAnswer);
