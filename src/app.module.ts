import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ScheduleModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
