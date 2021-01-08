import Orphanage from "../entities/Orphanage";
import {
  Resolver,
  Mutation,
  Arg,
  Float,
  Query,
  InputType,
  Field,
} from "type-graphql";

@InputType()
class OrphanageInsertInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  whatsapp: string;

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

//Fase 2
// @InputType()
// class OrphanageUpdateInput {
//   @Field({ nullable: true })
//   name?: string;

//   @Field()
//   email?: string;

//   @Field()
//   whatsapp?: string;

//   @Field(() => Float, { nullable: true })
//   latitude?: number;

//   @Field(() => Float, { nullable: true })
//   longitude?: number;

//   @Field({ nullable: true })
//   about?: string;

//   @Field({ nullable: true })
//   instructions?: string;

//   @Field({ nullable: true })
//   openingHours?: string;

//   @Field({ nullable: true })
//   openOnWeekends?: boolean;
// }

@Resolver()
export class OrphanagesResolver {
  @Mutation(() => Orphanage)
  async createOrphanage(
    @Arg("options", () => OrphanageInsertInput) options: OrphanageInsertInput
  ) {
    //option 1
    //await Orphanage.insert(options)
    //option 2
    const orphanage = await Orphanage.create(options).save();
    return orphanage;
  }

  @Query(() => [Orphanage])
  orphanages() {
    return Orphanage.find();
  }

  @Query(() => Orphanage, { nullable: true })
  async findOrphanageById(@Arg("id") id: string) {
    return Orphanage.findOne(id);
  }

  //Fase 2
  // @Query(() => Orphanage, {nullable: true})
  // async findOrphanageByName(
  //   @Arg('name') name: string) {
  //   return Orphanage.findOne({
  //     name: name
  //   });
  // }

  // @Mutation(() => Boolean)
  // async updateOrphanage(
  //   @Arg('id') id: string,
  //   @Arg("options", () => OrphanageUpdateInput) options:  OrphanageUpdateInput,
  // ) {
  //   await Orphanage.update({id}, options);
  //   return true;
  // }

  // @Mutation(() => Boolean)
  // async deleteOrphanage(@Arg('id') id: string) {
  //   await Orphanage.delete({id})
  //   return true;
  // }
}
