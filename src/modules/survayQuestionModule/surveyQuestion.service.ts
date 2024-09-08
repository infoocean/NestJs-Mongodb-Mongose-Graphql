import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SurveyQuestion,
  SurveyQuestionDocument,
} from './schema/surveyQuestion.model';
import { SurveyQuestionInput } from './dto/surveyQuestion.input';

@Injectable()
export class SurveyQuestionService {
  constructor(
    @InjectModel(SurveyQuestion.name)
    private surveyQuestionModel: Model<SurveyQuestionDocument>,
  ) {}

  async findAll(): Promise<SurveyQuestion[]> {
    return this.surveyQuestionModel.find().exec();
  }

  async findOne(id: string): Promise<SurveyQuestion> {
    return this.surveyQuestionModel.findById(id).exec();
  }

  async create(user: SurveyQuestionInput): Promise<SurveyQuestion> {
    return await this.surveyQuestionModel.create(user);
  }

  async update(id: string, user: SurveyQuestionInput): Promise<SurveyQuestion> {
    return this.surveyQuestionModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<SurveyQuestion> {
    return this.surveyQuestionModel.findByIdAndDelete(id).exec();
  }
}
