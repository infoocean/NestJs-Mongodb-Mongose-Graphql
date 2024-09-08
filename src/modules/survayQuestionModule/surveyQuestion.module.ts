import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyQuestionService } from './surveyQuestion.service';
import {
  SurveyQuestion,
  SurveyQuestionSchema,
} from './schema/surveyQuestion.model';
import { SurveyQuestionResolver } from './surveyQuestion.resolver';

@Module({
  providers: [SurveyQuestionService, SurveyQuestionResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: SurveyQuestion.name,
        schema: SurveyQuestionSchema,
      },
    ]),
  ],
})
export class SurveyQuestionModule {}
