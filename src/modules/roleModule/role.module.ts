import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { Role, RoleSchema } from './schema/role.model';

@Module({
  providers: [RoleService, RoleResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Role.name,
        schema: RoleSchema,
      },
    ]),
  ],
})
export class RoleModule {}
