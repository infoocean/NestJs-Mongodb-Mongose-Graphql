import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyCommentLikeService } from './surveyCommentLike.service';
import { SurveyCommentLikeResolver } from './surveyCommentLike.resolver';
import {
  SurveyCommentLike,
  SurveyCommentLikeSchema,
} from './schema/surveyCommentLike.model';

@Module({
  providers: [SurveyCommentLikeService, SurveyCommentLikeResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: SurveyCommentLike.name,
        schema: SurveyCommentLikeSchema,
      },
    ]),
  ],
})
export class SurveyCommentLikeModule {}
