// import React from "react"
// import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/next'
// import { ThemeProvider } from '@/components/theme-provider'
// import './globals.css'
// import Providers from "@/components/common/LoaderProvider"

// export const metadata: Metadata = {
//   title: 'BMS - Business Management System',
//   description: 'Simplify your business operations with intelligent, configurable management tools designed for modern entrepreneurs.',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`font-sans antialiased`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Providers>{children}</Providers>
//         </ThemeProvider>
//         <Analytics />
//       </body>
//     </html>
//   )
// }


import React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Providers from "@/components/common/LoaderProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "BMS - Business Management System",
  description:
    "Simplify your business operations with intelligent, configurable management tools designed for modern entrepreneurs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${GeistSans.variable}
          ${GeistMono.variable}
          font-sans antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
