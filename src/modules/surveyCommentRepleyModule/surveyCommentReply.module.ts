import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyCommentReplyService } from './surveyCommentReply.service';
import { SurveyCommentReplyResolver } from './surveyCommentReply.resolver';
import {
  SurveyCommentReply,
  SurveyCommentReplySchema,
} from './schema/surveyCommentReply.model';

@Module({
  providers: [SurveyCommentReplyService, SurveyCommentReplyResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: SurveyCommentReply.name,
        schema: SurveyCommentReplySchema,
      },
    ]),
  ],
})
export class SurveyCommentReplyModule {}
