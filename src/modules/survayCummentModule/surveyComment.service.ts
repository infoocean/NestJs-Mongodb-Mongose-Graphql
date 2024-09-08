import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SurveyComment,
  SurveyCommentDocument,
} from './schema/surveyComment.model';
import { SurveyCommentInput } from './dto/surveyComment.input';

@Injectable()
export class SurveyCommentService {
  constructor(
    @InjectModel(SurveyComment.name)
    private surveyCommentModel: Model<SurveyCommentDocument>,
  ) {}

  async findAll(): Promise<SurveyComment[]> {
    return this.surveyCommentModel.find().exec();
  }

  async findOne(id: string): Promise<SurveyComment> {
    return this.surveyCommentModel.findById(id).exec();
  }

  async create(user: SurveyCommentInput): Promise<SurveyComment> {
    return await this.surveyCommentModel.create(user);
  }

  async update(id: string, user: SurveyCommentInput): Promise<SurveyComment> {
    return this.surveyCommentModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<SurveyComment> {
    return this.surveyCommentModel.findByIdAndDelete(id).exec();
  }
}
