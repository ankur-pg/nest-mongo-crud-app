import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.userService.findOne(id)
  }

  @Mutation(() => User)
  async createUser(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<User> {
    const user = new User(firstName, lastName, email, password)
    return await this.userService.create(user)
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<User> {
    const user = new User(firstName, lastName, email, password)
    return this.userService.update(id, user)
  }
}
