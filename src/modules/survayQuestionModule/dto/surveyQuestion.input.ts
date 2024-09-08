import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SurveyQuestionInput {
  @Field(() => ID)
  survey_id: string;

  @Field()
  question: string;

  @Field(() => ID)
  created_by: string;

  @Field({ nullable: true })
  created_at?: Date;
}
