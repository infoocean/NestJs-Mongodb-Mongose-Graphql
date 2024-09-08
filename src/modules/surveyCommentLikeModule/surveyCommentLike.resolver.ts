import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyCommentLike } from './schema/surveyCommentLike.model';
import { SurveyCommentLikeService } from './surveyCommentLike.service';
import { SurveyCommentLikeInput } from './dto/surveyCommentLike.input';

@Resolver(() => SurveyCommentLike)
export class SurveyCommentLikeResolver {
  constructor(
    private readonly surveyCommentLikeService: SurveyCommentLikeService,
  ) {}

  @Query(() => [SurveyCommentLike])
  async users(): Promise<SurveyCommentLike[]> {
    return this.surveyCommentLikeService.findAll();
  }

  @Query(() => SurveyCommentLike)
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeService.findOne(id);
  }

  @Mutation(() => SurveyCommentLike)
  async createUser(
    @Args('input') input: SurveyCommentLikeInput,
  ): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeService.create(input);
  }

  @Mutation(() => SurveyCommentLike)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: SurveyCommentLikeInput,
  ): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeService.update(id, input);
  }

  @Mutation(() => SurveyCommentLike)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeService.delete(id);
  }
}
