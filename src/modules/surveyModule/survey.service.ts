import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Survey, SurveyDocument } from './schema/survey.model';
import { SurveyInput } from './dto/survey.input';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
  ) {}

  async findAll(): Promise<Survey[]> {
    return this.surveyModel.find().exec();
  }

  async findOne(id: string): Promise<Survey> {
    return this.surveyModel.findById(id).exec();
  }

  async create(user: SurveyInput): Promise<Survey> {
    return await this.surveyModel.create(user);
  }

  async update(id: string, user: SurveyInput): Promise<Survey> {
    return this.surveyModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<Survey> {
    return this.surveyModel.findByIdAndDelete(id).exec();
  }
}
