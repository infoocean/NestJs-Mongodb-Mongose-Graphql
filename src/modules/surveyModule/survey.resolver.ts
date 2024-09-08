import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Survey } from './schema/survey.model';
import { SurveyService } from './survey.service';
import { SurveyInput } from './dto/survey.input';

@Resolver(() => Survey)
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  @Query(() => [Survey])
  async users(): Promise<Survey[]> {
    return this.surveyService.findAll();
  }

  @Query(() => Survey)
  async book(@Args('id', { type: () => ID }) id: string): Promise<Survey> {
    return this.surveyService.findOne(id);
  }

  @Mutation(() => Survey)
  async createUser(@Args('input') input: SurveyInput): Promise<Survey> {
    return this.surveyService.create(input);
  }

  @Mutation(() => Survey)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: SurveyInput,
  ): Promise<Survey> {
    return this.surveyService.update(id, input);
  }

  @Mutation(() => Survey)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Survey> {
    return this.surveyService.delete(id);
  }
}
