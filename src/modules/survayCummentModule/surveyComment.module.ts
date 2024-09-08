import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyCommentService } from './surveyComment.service';
import { SurveyCommentResolver } from './surveyComment.resolver';
import {
  SurveyComment,
  SurveyCommentSchema,
} from './schema/surveyComment.model';

@Module({
  providers: [SurveyCommentService, SurveyCommentResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: SurveyComment.name,
        schema: SurveyCommentSchema,
      },
    ]),
  ],
})
export class SurveyCommentModule {}
