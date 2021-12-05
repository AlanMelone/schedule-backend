import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
