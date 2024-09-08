import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { User } from './schema/user.model';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async book(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: UserInput): Promise<User> {
    return this.userService.create(input);
  }

  @Mutation(() => User)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UserInput,
  ): Promise<User> {
    return this.userService.update(id, input);
  }

  @Mutation(() => User)
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
