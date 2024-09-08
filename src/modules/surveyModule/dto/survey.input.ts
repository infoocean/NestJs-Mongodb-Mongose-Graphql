import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SurveyInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  status?: string;

  @Field()
  image_url: string;

  @Field()
  video_url: string;

  @Field()
  primary_question: string;

  @Field()
  option_a_question: string;

  @Field()
  option_b_question: string;

  @Field(() => ID)
  created_by: string;

  @Field({ nullable: true })
  created_at?: Date;
}
