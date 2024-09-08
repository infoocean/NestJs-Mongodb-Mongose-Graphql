import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './schema/role.model';
import { RoleDocument } from './schema/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }

  async create(role: Role): Promise<Role> {
    return await this.roleModel.create(role);
  }
}
