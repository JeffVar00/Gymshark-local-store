import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import OAuthProvider from "next-auth/providers/oauth";


export const authOptions:NextAuthOptions = {
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_ID!,
                clientSecret: process.env.GOOGLE_SECRET!
            }
        ),
    ]
}

export const getAuthSession = ()=>getServerSession(authOptions)