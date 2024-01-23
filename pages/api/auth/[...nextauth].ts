import { signInWithPopup } from 'firebase/auth';
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/config/firebase";

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
            clientId: '1051544115028-gn45vkok60a7ejfdiosm2dbd8s2fk3hi.apps.googleusercontent.com',
            clientSecret: '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',
        }),
    ],
}

export default NextAuth(authOptions)