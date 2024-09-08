import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SurveyQuestionAnswer,
  SurveyQuestionAnswerDocument,
} from './schema/survayQuestionAnswer.model';
import { UserInput } from './dto/survayQuestionAnswer.input';

@Injectable()
export class SurvayQuestionAnswerService {
  constructor(
    @InjectModel(SurveyQuestionAnswer.name)
    private surveyQuestionAnswerModel: Model<SurveyQuestionAnswerDocument>,
  ) {}

  async findAll(): Promise<SurveyQuestionAnswer[]> {
    return this.surveyQuestionAnswerModel.find().exec();
  }

  async findOne(id: string): Promise<SurveyQuestionAnswer> {
    return this.surveyQuestionAnswerModel.findById(id).exec();
  }

  async create(user: UserInput): Promise<SurveyQuestionAnswer> {
    return await this.surveyQuestionAnswerModel.create(user);
  }

  async update(id: string, user: UserInput): Promise<SurveyQuestionAnswer> {
    return this.surveyQuestionAnswerModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<SurveyQuestionAnswer> {
    return this.surveyQuestionAnswerModel.findByIdAndDelete(id).exec();
  }
}
