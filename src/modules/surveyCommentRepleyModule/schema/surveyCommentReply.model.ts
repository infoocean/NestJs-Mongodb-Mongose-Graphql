import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SurveyComment } from '../../survayCummentModule/schema/surveyComment.model';
import { User } from '../../userModule/schema/user.model';

export type SurveyCommentReplyDocument = SurveyCommentReply & Document;

@ObjectType()
@Schema()
export class SurveyCommentReply {
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
  reply_comment: string;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  created_at: Date;

  @Field()
  @Prop({ required: true, default: () => new Date() })
  updated_at: Date;
}

export const SurveyCommentReplySchema =
  SchemaFactory.createForClass(SurveyCommentReply);
