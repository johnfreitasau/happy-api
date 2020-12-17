import 'reflect-metadata'
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
// import {createConnection} from 'typeorm';

import { __prod__ } from './constant';
//import { HelloResolver } from './resolvers/hello';
// import { OrphanagesResolver } from './resolvers/orphanages';
import { createConnection } from 'typeorm';
//import { OrphanagesResolver } from './resolvers/orphanages';
// import path from 'path';
import { HelloResolver } from './resolvers/hello';
import { OrphanagesResolver } from './resolvers/orphanages';
// import path from 'path';
// import Orphanages from './entities/Orphanages';

const main = async () => {

  const app = express();

  console.log('DIR:',__dirname)

  await createConnection();

  //   {
  //     type: 'postgres',
  //     url: process.env.DATABASE_URL,
  //     logging: false,
  //     // syncronize: true,
  //     migrations: [path.join(__dirname, "./shared/infra/typeorm/migrations/*")],
  //     entities: [Orphanages]
  //   }
  // );

  const schema = await buildSchema({
    resolvers: [HelloResolver, OrphanagesResolver]
  });

  const apolloServer = new ApolloServer({ schema })
  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [HelloResolver, OrphanagesResolver],
  //     validate: false
  //   }),
  //   context: ({req, res}) =>({
  //     req, res
  //   })
  //   })
  

      // context: () => ({ em: connection. })
  apolloServer.applyMiddleware({app});

  app.get('/', (_, res) => {
    res.send('hello')
  })

  app.listen(3000,() => {
    console.log(`Server is up on port 3000 - ${apolloServer.graphqlPath}`);
  })

};

main().catch((err) => console.error(err));