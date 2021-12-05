import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alanmelone',
      password: 'alanwake8',
      database: 'schedule',
      synchronize: true,
      entities: ['dist/entities/*.js'],
      migrations: ['dist/migrations/*.js'],
      cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities',
      },
    }),
    ScheduleModule,
  ],
})
export class AppModule {}
