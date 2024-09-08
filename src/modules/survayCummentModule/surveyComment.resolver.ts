import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyComment } from './schema/surveyComment.model';
import { SurveyCommentService } from './surveyComment.service';
import { SurveyCommentInput } from './dto/surveyComment.input';

@Resolver(() => SurveyComment)
export class SurveyCommentResolver {
  constructor(private readonly surveyCommentService: SurveyCommentService) {}

  @Query(() => [SurveyComment])
  async users(): Promise<SurveyComment[]> {
    return this.surveyCommentService.findAll();
  }

  @Query(() => SurveyComment)
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyComment> {
    return this.surveyCommentService.findOne(id);
  }

  @Mutation(() => SurveyComment)
  async createUser(
    @Args('input') input: SurveyCommentInput,
  ): Promise<SurveyComment> {
    return this.surveyCommentService.create(input);
  }

  @Mutation(() => SurveyComment)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: SurveyCommentInput,
  ): Promise<SurveyComment> {
    return this.surveyCommentService.update(id, input);
  }

  @Mutation(() => SurveyComment)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyComment> {
    return this.surveyCommentService.delete(id);
  }
}
