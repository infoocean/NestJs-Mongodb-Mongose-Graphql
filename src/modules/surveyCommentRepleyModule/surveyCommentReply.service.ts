import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SurveyCommentReply,
  SurveyCommentReplyDocument,
} from './schema/surveyCommentReply.model';
import { SurveyCommentReplyInput } from './dto/surveyCommentReply..input';

@Injectable()
export class SurveyCommentReplyService {
  constructor(
    @InjectModel(SurveyCommentReply.name)
    private surveyCommentReplyModel: Model<SurveyCommentReplyDocument>,
  ) {}

  async findAll(): Promise<SurveyCommentReply[]> {
    return this.surveyCommentReplyModel.find().exec();
  }

  async findOne(id: string): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyModel.findById(id).exec();
  }

  async create(user: SurveyCommentReplyInput): Promise<SurveyCommentReply> {
    return await this.surveyCommentReplyModel.create(user);
  }

  async update(
    id: string,
    user: SurveyCommentReplyInput,
  ): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyModel
      .findByIdAndUpdate(id, user, { new: true })
      .exec();
  }

  async delete(id: string): Promise<SurveyCommentReply> {
    return this.surveyCommentReplyModel.findByIdAndDelete(id).exec();
  }
}
