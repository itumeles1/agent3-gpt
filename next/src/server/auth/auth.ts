import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import { serverEnv } from "../../env/schema.mjs";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: serverEnv.GOOGLE_CLIENT_ID ?? "113996567181942372723",
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET ?? "0c1e6c1bb736eecb67f26fc8b6219e2b22a8940f",
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: serverEnv.GITHUB_CLIENT_ID ?? "",
      clientSecret: serverEnv.GITHUB_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),
    DiscordProvider({
      clientId: serverEnv.DISCORD_CLIENT_ID ?? "",
      clientSecret: serverEnv.DISCORD_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/signin",
  }
};
