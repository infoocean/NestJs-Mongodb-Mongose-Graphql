import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SurveyCommentLike,
  SurveyCommentLikeDocument,
} from './schema/surveyCommentLike.model';
import { SurveyCommentLikeInput } from './dto/surveyCommentLike.input';

@Injectable()
export class SurveyCommentLikeService {
  constructor(
    @InjectModel(SurveyCommentLike.name)
    private surveyCommentLikeModel: Model<SurveyCommentLikeDocument>,
  ) {}

  async findAll(): Promise<SurveyCommentLike[]> {
    return this.surveyCommentLikeModel.find().exec();
  }

  async findOne(id: string): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeModel.findById(id).exec();
  }

  async create(user: SurveyCommentLikeInput): Promise<SurveyCommentLike> {
    return await this.surveyCommentLikeModel.create(user);
  }

  async update(
    id: string,
    user: SurveyCommentLikeInput,
  ): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<SurveyCommentLike> {
    return this.surveyCommentLikeModel.findByIdAndDelete(id).exec();
  }
}
