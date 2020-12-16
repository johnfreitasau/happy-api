import { Field, Int, ObjectType } from 'type-graphql';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@ObjectType()
@Entity('orphanages')
export default class Orphanages {

  @Field((() => Int))
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field()
  @Column()
  latitude: number;

  @Field()
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