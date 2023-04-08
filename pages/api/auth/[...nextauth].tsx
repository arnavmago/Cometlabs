import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import {
  getGitHubEmail,
  handleCustomSignIn,
  signinWithoutPassword
} from "@/backend/functions";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: any) {
        const user = await handleCustomSignIn(credentials);
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, user, profile }) {
      switch (account!.provider) {
        case "github": {
          // Get email from github API
          user.email = await getGitHubEmail(account!.access_token);

          // Get accessToken and uuid from backend
          const { accessToken, id, username, profileImage, createdAt, lastLogin } = await signinWithoutPassword({
            email: user.email,
            name: profile!.name,
            imageUrl: String(profile?.image)
          });

          // Set user info
          if (!!accessToken && !!id) {
            user.accessToken = accessToken;
            user.id = id;
            user.username = username;
            user.profileImage = profileImage;
            user.name;
            user.createdAt = createdAt;
            user.lastLogin = lastLogin;
            return true;
          }
          return true
        }

        case "google": {
          // Get accessToken and uuid from backend
          const { accessToken, id, username, profileImage, createdAt, lastLogin } = await signinWithoutPassword({
            email: profile!.email,
            name: profile!.name,
            imageUrl: String(profile!.image),
          });

          // Set user info
          if (!!accessToken && !!id) {
            user.accessToken = accessToken;
            user.id = id;
            user.username = username;
            user.profileImage = profileImage;
            user.name;
            user.createdAt = createdAt;
            user.lastLogin = lastLogin;
            return true;
          }
          return true
        }

        case "credentials":
          // Credentials data-fetching is handled in authorize()
          return true;

        default:
          return false;
      }
    },
    redirect: async () => {
      return "/welcome"
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session && (session.user = token.user);
      return session;
    },
  },
});
