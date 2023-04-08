import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            accessToken: string
            username: string | undefined
            profileImage: string | undefined
            createdAt: Date | undefined
            lastLogin: Date | undefined
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        accessToken: string
        username: string | undefined
        profileImage: string | undefined
        createdAt: Date | undefined
        lastLogin: Date | undefined
        id: string;
        name: string;
        email: string;
        role: string;
    }
}


declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        user: User
    }
}