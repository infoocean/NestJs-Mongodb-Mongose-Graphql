import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { Survey, SurveySchema } from './schema/survey.model';

@Module({
  providers: [SurveyService, SurveyResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Survey.name,
        schema: SurveySchema,
      },
    ]),
  ],
})
export class SurveyModule {}
