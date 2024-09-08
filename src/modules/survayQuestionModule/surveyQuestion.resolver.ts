import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyQuestion } from './schema/surveyQuestion.model';
import { SurveyQuestionService } from './surveyQuestion.service';
import { SurveyQuestionInput } from './dto/surveyQuestion.input';

@Resolver(() => SurveyQuestion)
export class SurveyQuestionResolver {
  constructor(private readonly surveyQuestionService: SurveyQuestionService) {}

  @Query(() => [SurveyQuestion])
  async users(): Promise<SurveyQuestion[]> {
    return this.surveyQuestionService.findAll();
  }

  @Query(() => SurveyQuestion)
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyQuestion> {
    return this.surveyQuestionService.findOne(id);
  }

  @Mutation(() => SurveyQuestion)
  async createUser(
    @Args('input') input: SurveyQuestionInput,
  ): Promise<SurveyQuestion> {
    return this.surveyQuestionService.create(input);
  }

  @Mutation(() => SurveyQuestion)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: SurveyQuestionInput,
  ): Promise<SurveyQuestion> {
    return this.surveyQuestionService.update(id, input);
  }

  @Mutation(() => SurveyQuestion)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyQuestion> {
    return this.surveyQuestionService.delete(id);
  }
}
