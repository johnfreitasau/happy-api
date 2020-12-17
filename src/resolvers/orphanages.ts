import Orphanages from '../entities/Orphanages';
import {Resolver, Query} from 'type-graphql';

@Resolver()
export class OrphanagesResolver {
  @Query(() => [Orphanages])
  orphanages() {
    // return Orphanages.find();
    return 'Hello'
  }
}