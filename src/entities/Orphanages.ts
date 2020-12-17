import { Field, Int, ObjectType } from 'type-graphql';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@ObjectType()
@Entity({schema: 'orphanages'})
export default class Orphanages {

  @Field((() => Int))
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  latitude: number;

  @Field(() => Int)
  @Column()
  longitude: number;

  @Field(() => String)
  @Column()
  about: string;

  @Field(() => String)
  @Column()
  instructions: string;

  @Field(() => String)
  @Column({name: 'opening_hours'})
  openingHours: string;

  @Field(() => Boolean)
  @Column({name: 'open_on_weekends'})
  openOnWeekends: boolean;

  @Field(() => String)
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}