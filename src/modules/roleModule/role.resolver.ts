import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Role } from './schema/role.model';
import { RoleService } from './role.service';
import { RoleInput } from './dto/role.input';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Mutation(() => Role)
  async createRole(@Args('input') input: RoleInput): Promise<Role> {
    console.log(' input ', input);
    return this.roleService.create(input);
  }
}
