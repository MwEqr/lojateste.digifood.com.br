import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SplashScreen from '@/components/splash-screen'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petz Clone Premium',
  description: 'Tudo o que seu pet precisa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <Header />
          <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {children}
          </main>
          {/* Footer space */}
        </ThemeProvider>
      </body>
    </html>
  )
}
