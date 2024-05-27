import dotenv from "dotenv";
dotenv.config();

function getEnvironmentVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw Error(`${name} must be set.`);
  }
  return value;
}

export const PORT = getEnvironmentVariable("PORT");
export const username = getEnvironmentVariable("usernameDd");
export const password = getEnvironmentVariable("password");
export const database = getEnvironmentVariable("database");
export const dialect = getEnvironmentVariable("dialect");
export const host = getEnvironmentVariable("host");
export const AMBIENTE_API = getEnvironmentVariable("AMBIENTE_API");

