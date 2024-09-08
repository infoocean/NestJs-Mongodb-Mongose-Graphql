import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodbConfig from './config/mongodb.config';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserModule } from './modules/userModule/user.module';
import { SurveyModule } from './modules/surveyModule/survay.module';
import { RoleModule } from './modules/roleModule/role.module';
import { SurveyQuestionModule } from './modules/survayQuestionModule/surveyQuestion.module';
import { SurvayQuestionAnswerModule } from './modules/survayQuestionAnswerModule/survayQuestionAnswer.module';
import { SurveyCommentModule } from './modules/survayCummentModule/surveyComment.module';
import { SurveyCommentLikeModule } from './modules/surveyCommentLikeModule/surveyCommentLike.module';
import { SurveyCommentReplyModule } from './modules/surveyCommentRepleyModule/surveyCommentReply.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongodbConfig],
      isGlobal: true,
    }),
    NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
        installSubscriptionHandlers: true,
        sortSchema: true,
        //playground: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        debug: configService.get<boolean>('DEBUG'),
        uploads: false,
      }),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    RoleModule,
    UserModule,
    SurveyModule,
    SurveyQuestionModule,
    SurvayQuestionAnswerModule,
    SurveyCommentModule,
    SurveyCommentLikeModule,
    SurveyCommentReplyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
