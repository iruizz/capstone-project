import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                  label: "Username",
                  type: "text",
                  placeholder: "Username",
                },
                password: { label: "Password", type: "password" },
              },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "7", name: process.env.NEXTAUTH_USER as string, password: process.env.NEXTAUTH_PASS as string}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "https://www.dmdiocese.org/filesimages/Blogs/Discover%20the%20Difference/Loras1%20LC_Logo_StackII_Gold_Purple_Gold_Purple.png", // Absolute URL to image
        buttonText: "" // Hex color code
    },
    pages:{
        signIn: "/signIn",
    }


}