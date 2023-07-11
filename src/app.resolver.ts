import { Query, Resolver } from '@nestjs/graphql';
import { GraphQLService } from './graphql.service';

@Resolver(() => String)
export class AppResolver {
  constructor(private service: GraphQLService) {
    console.log('AuthorsResolver Constructor');
  }

  @Query(() => String)
  async getHello() {
    return this.service.getHello();
  }
}
