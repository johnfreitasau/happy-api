import { Field, Float, ObjectType } from 'type-graphql';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, JoinColumn} from 'typeorm';
import Images from './Image';

@ObjectType()
@Entity('orphanages')
export default class Orphanage extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  whatsapp: string;

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

  @OneToMany(() => Images, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Images[];
}