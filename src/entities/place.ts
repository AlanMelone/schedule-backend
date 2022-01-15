import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './event';

@Entity()
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'geography', spatialFeatureType: 'point' })
  location: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  auditorium?: string;

  @OneToMany(() => Event, (event) => event.lector)
  events: Event[];
}
