import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventType } from './enums/event-type';
import { Lector } from './lector';
import { Group } from './group';
import { Place } from './place';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  remoteLink?: string;

  @Column({ type: 'timestamp with time zone' })
  startDate: Date;

  @Column({ type: 'timestamp with time zone' })
  endDate: Date;

  @Column({ default: EventType.Lecture })
  type: EventType;

  @ManyToOne(() => Lector, (lector) => lector.events)
  lector: Lector;

  @ManyToOne(() => Place, (place) => place.events)
  place: Place;

  @ManyToMany(() => Group)
  @JoinTable()
  groups: Group[];
}
