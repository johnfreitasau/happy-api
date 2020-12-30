import Orphanages from '../entities/Orphanages';
import {Resolver, Mutation, Arg, Float, Query, InputType, Field} from 'type-graphql';

@InputType()
class OrphanageInsertInput {
  @Field()
  name: string

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field()
  about: string;

  @Field()
  instructions: string;

  @Field()
  openingHours: string;

  @Field()
  openOnWeekends: boolean;
}

@InputType()
class OrphanageUpdateInput {
  @Field({nullable: true})
  name?: string

  @Field(() => Float,{nullable: true})
  latitude?: number;

  @Field(() => Float,{nullable: true})
  longitude?: number;

  @Field({nullable: true})
  about?: string;

  @Field({nullable: true})
  instructions?: string;

  @Field({nullable: true})
  openingHours?: string;

  @Field({nullable: true})
  openOnWeekends?: boolean;
}


@Resolver()
export class OrphanagesResolver {

  @Mutation(() => Orphanages)
  async createOrphanage(    
    @Arg("options", () => OrphanageInsertInput) options: OrphanageInsertInput,
    ) {
    //option 1
      //await Orphanages.insert(options)
    //option 2
    const orphanage = await Orphanages.create(options).save()
    return orphanage;
  }

  @Mutation(() => Boolean)
  async updateOrphanage(
    @Arg('id') id: string,
    @Arg("options", () => OrphanageUpdateInput) options:  OrphanageUpdateInput,
  ) {
    await Orphanages.update({id}, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteOrphanage(@Arg('id') id: string) {
    await Orphanages.delete({id})
    return true;
  }

  @Query(() => [Orphanages])
  orphanages() {
    return Orphanages.find();
  }

  @Query(() => Orphanages, {nullable: true})
  async findOrphanageByName(
    @Arg('name') name: string) {
    return Orphanages.findOne({
      name: name
    });
  }

  @Query(() => Orphanages, {nullable: true})
  async findOrphanageById(
    @Arg('id') id: string) {
    return Orphanages.findOne(id);
  }
}