import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => ID)
  role_id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  is_deleted?: number;

  @Field({ nullable: true })
  login_with?: string;

  @Field({ nullable: true })
  created_at?: Date;
}
