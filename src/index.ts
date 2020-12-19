import 'reflect-metadata'
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import { createConnection } from 'typeorm';
import { OrphanagesResolver } from './resolvers/orphanages';
import { __prod__ } from './constant';

const main = async () => {

  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({ 
    schema: await buildSchema({
      resolvers: [OrphanagesResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  })

  apolloServer.applyMiddleware({app, cors: false});

  // app.get('/', (_, res) => {
  //   res.send('hello')
  // })

  app.listen(3000,() => {
    console.log(`Express server started on port 3000 - ${apolloServer.graphqlPath}`);
  })
};

main().catch((err) => console.error(err));