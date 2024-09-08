import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SurveyCommentInput {
  @Field(() => ID)
  user_id: string;

  @Field(() => ID)
  survey_id: string;

  @Field()
  comment: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
}
