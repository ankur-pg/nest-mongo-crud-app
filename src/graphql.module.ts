import { Module } from "@nestjs/common"
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [NestGraphQLModule.forRoot({
    autoSchemaFile: true
  })],
  exports: [NestGraphQLModule]
})
export class GraphQLModule {}
