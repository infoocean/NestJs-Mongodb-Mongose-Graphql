import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyCommentReply } from './schema/surveyCommentReply.model';
import { SurveyCommentReplyService } from './surveyCommentReply.service';
import { SurveyCommentReplyInput } from './dto/surveyCommentReply..input';

@Resolver(() => SurveyCommentReply)
export class SurveyCommentReplyResolver {
  constructor(
    private readonly surveyCommentReplyService: SurveyCommentReplyService,
  ) {}

  @Query(() => [SurveyCommentReply])
  async users(): Promise<SurveyCommentReply[]> {
    return this.surveyCommentReplyService.findAll();
  }

  @Query(() => SurveyCommentReply)
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyService.findOne(id);
  }

  @Mutation(() => SurveyCommentReply)
  async createUser(
    @Args('input') input: SurveyCommentReplyInput,
  ): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyService.create(input);
  }

  @Mutation(() => SurveyCommentReply)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: SurveyCommentReplyInput,
  ): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyService.update(id, input);
  }

  @Mutation(() => SurveyCommentReply)
  async deleteBook(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyService.delete(id);
  }
}
