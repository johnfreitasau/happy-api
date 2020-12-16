import Orphanages from 'src/entities/Orphanages';
import {Resolver, Query} from 'type-graphql';

@Resolver()
export class OrphanagesResolver {
  @Query(() => [Orphanages])
  orphanages() {
    return 'hello orphanages'
  }
}