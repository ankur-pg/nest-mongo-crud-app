import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type UserDocument = User & Document

@ObjectType()
@Schema()
export class User {
  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  @Field(() => ID)
  id: string

  @Field()
  @Prop()
  firstName: string

  @Field()
  @Prop()
  lastName: string

  @Field()
  @Prop()
  email: string

  @Field()
  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
