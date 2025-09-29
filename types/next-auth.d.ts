import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    stripeCustomerId?: string;
  }
  interface Session {
    user: User & {
      stripeCustomerId?: string;
    };
  }
}
