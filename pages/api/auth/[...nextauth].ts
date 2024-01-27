import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/config/firebase";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch(error => console.log(error));
            }
        }),
        GoogleProvider({
            name: 'Google',
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        GitHubProvider({
            name: 'GitHub',
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
          })
    ],
}

export default NextAuth(authOptions)