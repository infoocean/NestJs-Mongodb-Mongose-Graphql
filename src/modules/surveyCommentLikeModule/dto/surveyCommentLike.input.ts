import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SurveyCommentLikeInput {
  @Field(() => ID)
  comment_id: string;

  @Field(() => ID)
  user_id: string;

  @Field()
  like_dislike: string;

  @Field({ nullable: true })
  created_at?: Date;
}
