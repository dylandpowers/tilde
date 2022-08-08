import { Request } from "express";
import { parse } from "graphql";
import { Secret, verify } from "jsonwebtoken";

export interface AuthTokenPayload {
  userId: number;
}

const AUTH_NOT_REQUIRED_OPERATIONS = new Set<string>(["login", "token"]);

export function doesOperationRequireAuth(req: Request): boolean {
  const parsed = parse(req.body.query) as any;
  const operation = parsed?.definitions[0].selectionSet.selections[0].name.value;
  return !AUTH_NOT_REQUIRED_OPERATIONS.has(operation);
}

export function decodeAuthHeader(header: string) {
  const token = header.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token found");
  }
  return verify(token, process.env.JWT_SECRET as Secret) as AuthTokenPayload;
}