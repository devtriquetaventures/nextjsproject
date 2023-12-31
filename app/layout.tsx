import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: '%s | Tense Dashboard',
    default: 'Tense Dashboard'
  },
  description: 'The official Tense System App',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/tense-logo.png" sizes="32x32" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
        </body>
    </html>
  );
}
