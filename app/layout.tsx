import './globals.css'

export const metadata = {
  title: "Ketan Kritesh | Frontend Developer",
  description: "Premium Interactive Portfolio",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">{children}</body>
    </html>
  )
}