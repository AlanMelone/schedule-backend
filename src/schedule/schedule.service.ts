import { Injectable } from '@nestjs/common';
import { Event } from '../entities/event';

@Injectable()
export class ScheduleService {
  async getAllEvents(): Promise<Event[]> {
    return await Event.find();
  }
}
