import { GraphQLScalarType } from "graphql";
import { DateTimeResolver } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const dateTime = asNexusMethod(
  new GraphQLScalarType(DateTimeResolver),
  "dateTime"
);
