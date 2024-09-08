import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SurveyComment } from '../../survayCummentModule/schema/surveyComment.model';
import { User } from '../../userModule/schema/user.model';

export type SurveyCommentLikeDocument = SurveyCommentLike & Document;

@ObjectType()
@Schema()
export class SurveyCommentLike {
  @Field(() => ID)
  id?: string;

  @Field(() => SurveyComment)
  @Prop({ type: Types.ObjectId, ref: 'SurveyComment', required: true })
  comment_id: Types.ObjectId;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  like_dislike: string;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;
}

export const SurveyCommentLikeSchema =
  SchemaFactory.createForClass(SurveyCommentLike);
