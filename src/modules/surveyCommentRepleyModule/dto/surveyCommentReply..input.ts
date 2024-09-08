import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SurveyCommentReplyInput {
  @Field(() => ID)
  comment_id: string;

  @Field(() => ID)
  user_id: string;

  @Field()
  reply_comment: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}
