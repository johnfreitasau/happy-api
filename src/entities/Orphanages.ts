import { Field, Float, ObjectType } from 'type-graphql';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';

@ObjectType()
@Entity('orphanages')
export default class Orphanages extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Float)
  @Column()
  latitude: number;

  @Field(() => Float)
  @Column()
  longitude: number;

  @Field()
  @Column()
  about: string;

  @Field()
  @Column()
  instructions: string;

  @Field()
  @Column({name: 'opening_hours'})
  openingHours: string;

  @Field()
  @Column({name: 'open_on_weekends'})
  openOnWeekends: boolean;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}