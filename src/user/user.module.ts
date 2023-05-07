import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [UserService, UserResolver],
  controllers: [UserController]
})
export class UserModule {}
