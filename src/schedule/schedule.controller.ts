import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Event } from '../entities/event';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  async allEvents(): Promise<Event[]> {
    return await this.scheduleService.getAllEvents();
  }
}
