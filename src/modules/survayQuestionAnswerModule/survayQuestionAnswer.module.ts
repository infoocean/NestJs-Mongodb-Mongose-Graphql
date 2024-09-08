import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurvayQuestionAnswerService } from './survayQuestionAnswer.service';
import { SurvayQuestionAnswerResolver } from './survayQuestionAnswer.resolver';
import {
  SurveyQuestionAnswer,
  SurveyQuestionAnswerSchema,
} from './schema/survayQuestionAnswer.model';

@Module({
  providers: [SurvayQuestionAnswerService, SurvayQuestionAnswerResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: SurveyQuestionAnswer.name,
        schema: SurveyQuestionAnswerSchema,
      },
    ]),
  ],
})
export class SurvayQuestionAnswerModule {}
