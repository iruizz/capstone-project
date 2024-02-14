import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "0", name: "Loras", password: "duhawks" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "https://www.dmdiocese.org/filesimages/Blogs/Discover%20the%20Difference/Loras1%20LC_Logo_StackII_Gold_Purple_Gold_Purple.png", // Absolute URL to image
        buttonText: "" // Hex color code
    },


}