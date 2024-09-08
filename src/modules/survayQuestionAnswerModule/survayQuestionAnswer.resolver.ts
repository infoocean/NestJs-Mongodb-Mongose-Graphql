import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyQuestionAnswer } from './schema/survayQuestionAnswer.model';
import { SurvayQuestionAnswerService } from './survayQuestionAnswer.service';
import { UserInput } from './dto/survayQuestionAnswer.input';

@Resolver(() => SurveyQuestionAnswer)
export class SurvayQuestionAnswerResolver {
  constructor(
    private readonly survayQuestionAnswerService: SurvayQuestionAnswerService,
  ) {}

  @Query(() => [SurveyQuestionAnswer])
  async users(): Promise<SurveyQuestionAnswer[]> {
    return this.survayQuestionAnswerService.findAll();
  }

  @Query(() => SurveyQuestionAnswer)
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyQuestionAnswer> {
    return this.survayQuestionAnswerService.findOne(id);
  }

  @Mutation(() => SurveyQuestionAnswer)
  async createUser(
    @Args('input') input: UserInput,
  ): Promise<SurveyQuestionAnswer> {
    return this.survayQuestionAnswerService.create(input);
  }

  @Mutation(() => SurveyQuestionAnswer)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UserInput,
  ): Promise<SurveyQuestionAnswer> {
    return this.survayQuestionAnswerService.update(id, input);
  }

  @Mutation(() => SurveyQuestionAnswer)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyQuestionAnswer> {
    return this.survayQuestionAnswerService.delete(id);
  }
}
