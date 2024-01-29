import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { GithubProfile } from "next-auth/providers/github";
import { GoogleProfile } from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your Name" },
        password: { label: "Password", type: "password" },
        email : { label: "Email", type: "email" },
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || "",
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
    GoogleProvider({
      name: "Google",
      clientId:
        "1051544115028-gn45vkok60a7ejfdiosm2dbd8s2fk3hi.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GitHubProvider({

        profile(profile: GithubProfile) {
            return {
                ...profile,
                id: profile.id.toString(),
                image: profile.avatar_url,
                role: profile.role ?? "user",
            }
        },
      name: "GitHub",
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    async jwt({ token, user, session, trigger }: any) {
      console.log("jwt Callback", { token, user, session });

      if(trigger === "update" && session?.name)



      if (user) {
        return {
            ...token,
            id: user.uid,
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
            address: user.address,
        }
      }
      return token;
    },

    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
       
        return {
            ...session,
            user: {
                ...session.user,
                address: token.address,
                id: token.id,
                accessToken: token.accessToken,
            }
        };
      return session;
    },
  },
};

export default NextAuth(authOptions);
