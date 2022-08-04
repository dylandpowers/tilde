import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import { context } from "./context";
import { schema } from "./schema";

dotenv.config();

export const server = new ApolloServer({
  schema,
  context
});

const port = 3000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});